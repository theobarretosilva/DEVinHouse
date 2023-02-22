import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { StateService } from '../../states/services/state.service';
import { CityService } from '../services/city.service';
import { City } from '../interfaces';
import { ApiTags } from '@nestjs/swagger';
import { CityEntity } from '../entities/city.entity';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import axios from 'axios';
import { CreateCityDto } from '../dto/create-city.dto';
import { Patch } from '@nestjs/common/decorators';
import { UpdateResult } from 'typeorm';

@ApiTags('cities')
@Controller('city')
export class CityController {
  constructor(
    private cityService: CityService,
    private stateService: StateService,
  ) {}

  @Get(':id')
  async getById(@Param('id') id: number): Promise<CityEntity> {
    return await this.cityService.findById(id);
  }

  @Post('createAllCities')
  async createAllCities(): Promise<string> {
    try {
      const { data } = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
      );
      const states = await this.stateService.getByAll();

      data.forEach((city: City) => {
        const state = states.find(
          ({ initials }) => city.microrregiao.mesorregiao.UF.sigla === initials,
        );

        const newCity = {
          name: city.nome,
          state_id: state.id,
        };

        this.cityService.createCity(newCity);
      });
      return 'Cidades salvas com sucesso';
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  async deleteCity(@Param('id') id: number): Promise<string> {
    try {
      if (!id) {
        throw new HttpException(
          { reason: 'Id inválido' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return await this.cityService.deleteCity(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Post('createCity')
  async createCity(@Body() cityDTO: CreateCityDto): Promise<string> {
    try {
      if (await this.cityService.findCity(cityDTO)) {
        throw new HttpException(
          { reason: 'Cidade já cadastrada!' },
          HttpStatus.CONFLICT,
        );
      }
      if (await this.stateService.findState(cityDTO.state_id)) {
        throw new HttpException(
          { reason: 'Este estado não está cadastrado!' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return await this.cityService.createCity(cityDTO);
    } catch (error) {
      throw new HttpException(
        { reason: 'Alguma informação está incorreta, verifique novamente!' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch('updateCity/:id')
  async updateCity(
    @Param('id') id: number,
    @Body() updateCity: CreateCityDto,
  ): Promise<UpdateResult> {
    try {
      if (!id) {
        throw new HttpException(
          { reason: 'Alguma informação está incorreta, verifique novamente!' },
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!(await this.cityService.findById(id))) {
        throw new HttpException(
          { reason: 'Não encontramos uma cidade com este Id' },
          HttpStatus.NOT_FOUND,
        );
      }
      return await this.cityService.updateCity(id, updateCity);
    } catch (error) {
      console.log(error);
    }
  }
}
