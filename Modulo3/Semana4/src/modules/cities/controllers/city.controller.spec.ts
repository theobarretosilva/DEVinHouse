import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Test, TestingModule } from '@nestjs/testing';
import { StateController } from 'src/modules/states/controllers/state.controller';
import { TestStatic } from 'src/utils/test';
import { CityService } from '../services/city.service';
import { CityController } from './city.controller';

describe('CityController', () => {
  let cityController: CityController;
  let stateController: StateController;

  const mockService = {
    findById: jest.fn(),
    createCity: jest.fn(),
    deleteCity: jest.fn(),
    findCity: jest.fn(),
    updateCity: jest.fn(),
    findState: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityController],
      providers: [{ provide: CityService, useValue: mockService }],
    }).compile();

    cityController = module.get<CityController>(CityController);
  });

  beforeEach(() => {
    mockService.findById.mockReset();
    mockService.createCity.mockReset();
    mockService.deleteCity.mockReset();
    mockService.findCity.mockReset();
    mockService.updateCity.mockReset();
  });

  it('Deveria estar definido', () => {
    expect(cityController).toBeDefined();
  });

  describe('getById', () => {
    it('Deveria retornar o resultado da busca e devolver um registro de dados de cidade', async () => {
      const city = TestStatic.cityData();
      mockService.findById.mockReturnValue(city);
      const foundCity = await cityController.getById(city.id);
      expect(foundCity).toMatchObject({ id: city.id });
      expect(mockService.findById).toHaveBeenCalledTimes(1);
    });

    it('Deveria retornar uma exceção, pois o path param enviado não é um number', async () => {
      const anyValue = 'anyValue' as unknown as number;
      await cityController.getById(anyValue).catch((error: Error) => {
        expect(error).toMatchObject({
          message: 'FieldMustBeNumber',
        });
        expect(error).toBeInstanceOf(BadRequestException);
      });
    });
  });

  describe('getCity', () => {
    it('Deveria retornar o resultado da busca e devolver um registro de dados da cidade', async () => {
      const city = TestStatic.cityData();
      mockService.findCity.mockReturnValue(city);
      const foundCity = await cityController.updateCity(city.id, city);
      expect(foundCity).toMatchObject({
        name: city.name,
        state_id: city.state,
      });
      expect(mockService.findById).toHaveBeenCalledTimes(1);
    });

    it('Deveria retornar uma exceção, pois o path param enviado não é um number', async () => {
      const city = TestStatic.cityData();
      mockService.findCity.mockReturnValue(city);
      const anyValue = 'anyValue' as unknown as number;
      await cityController.updateCity(anyValue, city).catch((error: Error) => {
        expect(error).toMatchObject({
          message: 'FieldMustBeNumber or FieldWasNotCorrectlyFilled',
        });
        expect(error).toBeInstanceOf(BadRequestException);
      });
    });

    it('Deveria retornar uma exceção, pois o path param enviado não retornou nenhuma cidade', async () => {
      const city = TestStatic.cityData();
      mockService.findCity.mockReturnValue(city);
      await cityController.updateCity(city.id, city).catch((error: Error) => {
        expect(error).toHaveReturned();
        expect(error).toBeInstanceOf(NotFoundException);
      });
    });
  });

  describe('createCity', () => {
    it('Deve retornar o objeto city criado', async () => {
      const city = TestStatic.cityDto();
      mockService.createCity.mockReturnValue(city);
      const cityCreated = await cityController.createCity(city);
      expect(cityCreated).toMatchObject({
        name: city.name,
        state_id: city.state_id,
      });
      expect(mockService.createCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois a cidade já está cadastrada', async () => {
      const city = TestStatic.cityDto();
      mockService.createCity.mockReturnValue(null);
      expect(cityController.createCity(city)).rejects.toBeInstanceOf(
        ConflictException,
      );
      expect(mockService.createCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois o estado não está cadastrado', async () => {
      const city = TestStatic.cityDto();
      mockService.findState.mockReturnValue(null);
      expect(stateController.getById(city.state_id)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockService.findState).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois alguma informação está incorreta', async () => {
      const city = TestStatic.cityDto();
      mockService.createCity.mockReturnValue(null);
      expect(cityController.createCity(city)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(mockService.createCity).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateCity', () => {
    it('Deve retornar o objeto resultante do update da cidade', async () => {
      const city = TestStatic.cityDto();
      const cityId = 1;
      mockService.updateCity.mockReturnValue(city);
      const cityUpdated = await cityController.updateCity(cityId, city);
      expect(cityUpdated).toMatchObject({
        name: city.name,
        state_id: city.state_id,
      });
      expect(mockService.updateCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois alguma informação da requisição está incorreta', async () => {
      const city = TestStatic.cityData();
      mockService.createCity.mockReturnValue(null);
      expect(cityController.updateCity(city.id, city)).rejects.toBeInstanceOf(
        BadRequestException,
      );
      expect(mockService.createCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois não foi encontrado uma cidade com o Id enviado', async () => {
      const city = TestStatic.cityData();
      mockService.findCity.mockReturnValue(null);
      await cityController.updateCity(city.id, city).catch((error: Error) => {
        expect(error).toHaveReturned();
        expect(error).toBeInstanceOf(NotFoundException);
      });
    });
  });

  describe('deleteCity', () => {
    it('Deve retornar uma mensagem dizendo que a cidade foi deletada com sucesso', async () => {
      const cityId = 1;
      mockService.deleteCity.mockReturnValue(String);
      const cityDeleted = await cityController.deleteCity(cityId);
      expect(cityDeleted).toBeInstanceOf({ id: cityId });
      expect(mockService.deleteCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois o Id enviado é inválido', async () => {
      const cityId = 1;
      mockService.deleteCity.mockReturnValue(String);
      await cityController.deleteCity(cityId).catch((error: Error) => {
        expect(error).toHaveReturned();
        expect(error).toBeInstanceOf(NotFoundException);
      });
    });
  });
});
