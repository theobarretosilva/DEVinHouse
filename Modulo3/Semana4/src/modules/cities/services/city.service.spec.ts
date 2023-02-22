import {
  ConflictException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Test, TestingModule } from '@nestjs/testing';
import { TestStatic } from 'src/utils/test';
import { CityRepository } from '../city.repository';
import { CityService } from './city.service';

describe('cityService', () => {
  let cityService: CityService;
  let cityRepository: CityRepository;

  const mockRepository = {
    getById: jest.fn(),
    createCity: jest.fn(),
    deleteCity: jest.fn(),
    findCityBy: jest.fn(),
    updateCity: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CityRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();

    cityService = module.get<CityService>(CityService);
    cityRepository = module.get<CityRepository>(CityRepository);
  });

  beforeEach(() => {
    mockRepository.createCity.mockReset();
    mockRepository.deleteCity.mockReset();
    mockRepository.findCityBy.mockReset();
    mockRepository.getById.mockReset();
    mockRepository.updateCity.mockReset();
  });

  it('O cityService deveria ser definido!', () => {
    expect(cityService).toBeDefined();
  });

  it('O cityRepository deveria ser definido!', () => {
    expect(cityRepository).toBeDefined();
  });

  describe('findById', () => {
    it('Deve retornar o objeto city', async () => {
      const city = TestStatic.cityData();
      mockRepository.getById.mockReturnValue(city);
      const foundCity = await cityService.findById(city.id);
      expect(foundCity).toMatchObject({ id: city.id });
      expect(mockRepository.getById).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois a cidade não foi encontrada', async () => {
      mockRepository.getById.mockReturnValue(null);
      const cityId = 2;
      expect(cityService.findById(cityId)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.getById).toHaveBeenCalledTimes(1);
    });
  });

  describe('findCity', () => {
    it('Deve retornar o objeto city', async () => {
      const cityDto = TestStatic.cityDto();
      mockRepository.findCityBy.mockReturnValue(cityDto);
      const foudCity = await cityService.findCity(cityDto);
      expect(foudCity).toMatchObject({
        name: cityDto.name,
        state_id: cityDto.state_id,
      });
      expect(mockRepository.findCityBy).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois a cidade não foi encontrada', async () => {
      const cityDto = TestStatic.cityDto();
      mockRepository.findCityBy.mockReturnValue(null);
      expect(cityService.findCity(cityDto)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findCityBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('createCity', () => {
    it('Deve retornar o objeto city', async () => {
      const city = TestStatic.cityDto();
      mockRepository.createCity.mockReturnValue(city);
      const cityCreated = await cityService.createCity(city);
      expect(cityCreated).toMatchObject({
        name: city.name,
        state_id: city.state_id,
      });
      expect(mockRepository.createCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois essa cidade já está cadastrada!', async () => {
      const city = TestStatic.cityDto();
      mockRepository.createCity.mockReturnValue(null);
      expect(cityRepository.createCity(city)).rejects.toBeInstanceOf(
        ConflictException,
      );
      expect(mockRepository.createCity).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateCity', () => {
    it('Deve retornar o objeto de update da city', async () => {
      const city = TestStatic.cityDto();
      const cityId = 1;
      mockRepository.updateCity.mockReturnValue(city);
      const cityUpdated = await cityRepository.updateCity(
        cityId,
        city.name,
        city.state_id,
      );
      expect(cityUpdated).toMatchObject({
        name: city.name,
        state_id: city.state_id,
      });
      expect(mockRepository.updateCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois não foi achada uma cidade com o Id enviado', async () => {
      const city = TestStatic.cityDto();
      const cityId = 1;
      mockRepository.findCityBy.mockReturnValue(null);
      await cityRepository
        .updateCity(cityId, city.name, city.state_id)
        .catch((error: Error) => {
          expect(error).toHaveReturned();
          expect(error).toBeInstanceOf(NotFoundException);
        });
    });
  });

  describe('deleteCity', () => {
    it('Deve retornar uma mensagem dizendo que a cidade foi deletada com sucesso', async () => {
      const cityId = 1;
      mockRepository.deleteCity.mockReturnValue(String);
      const cityDeleted = await cityService.deleteCity(cityId);
      expect(cityDeleted).toBeInstanceOf({ id: cityId });
      expect(mockRepository.deleteCity).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar uma exceção, pois o Id enviado é inválido', async () => {
      const cityId = 1;
      mockRepository.deleteCity.mockReturnValue(String);
      await cityService.deleteCity(cityId).catch((error: Error) => {
        expect(error).toHaveReturned();
        expect(error).toBeInstanceOf(NotFoundException);
      });
    });
  });
});
