import {
  Controller,
  Post,
  Request,
  Body,
  Get,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { DeviceDTO } from './device.dto';
import { DevicesService } from './devices.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('devices')
@Controller('devices')
export class DevicesController {
  constructor(
    private deviceService: DevicesService,
    private jwtService: JwtService,
  ) {}

  @ApiOperation({
    summary: 'devices/addDevice',
    description:
      'Este endpoint recebe no Header o Bearer token e no Body os dados pra adição de dispositivos',
  })
  @ApiResponse({
    status: 200,
    description: 'Dispositivo adicionado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não foi preenchido corretamente',
  })
  @ApiResponse({
    status: 409,
    description: 'Um dispositivo com esse _id já foi cadastrado!',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post('/addDevice')
  async addDevice(@Body() deviceDTO: DeviceDTO, @Request() request) {
    if (await this.deviceService.findOne(deviceDTO._id)) {
      throw new HttpException(
        { reason: 'Um dispositivo com esse _id já foi cadastrado!' },
        HttpStatus.CONFLICT,
      );
    } else {
      const authorization = request.headers.authorization;
      const token = authorization.split('Bearer ');
      const payload = this.jwtService.decode(token[1]);
      await this.deviceService.addDevice(payload, deviceDTO);
      return {
        message: 'Dispositivo adicionado com sucesso!',
      };
    }
  }

  @ApiOperation({
    summary: 'devices/detailDevice/:id',
    description:
      'Este endpoint recebe no Header o Bearer token e como param o id do dispositivo e retorna os dados',
  })
  @ApiResponse({
    status: 200,
    description: 'Dispositivo retornado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não foi preenchido corretamente',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('/detailDevice/:id')
  async detailDevice(@Param('id') id: number, @Request() request) {
    const authorization = request.headers.authorization;
    const token = authorization.split('Bearer ');
    const payload = this.jwtService.decode(token[1]);
    return await this.deviceService.detailDevice(id, payload);
  }

  @ApiOperation({
    summary: 'devices/allDevices',
    description:
      'Este endpoint recebe no Header o Bearer token e pode receber como query o local do dispositivo e retorna os dados dos dispositivos',
  })
  @ApiResponse({
    status: 200,
    description: 'Dispositivos retornados com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Algo não deu certo, revise e tente novamente',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('/allDevices')
  async getAllDevices(@Request() request, @Query('local') local?) {
    const authorization = request.headers.authorization;
    const token = authorization.split('Bearer ');
    const payload = this.jwtService.decode(token[1]);
    return await this.deviceService.allDevices(payload, local);
  }
}
