import { CreateCityDto, CreateCountryDto, CreateStateDto } from 'src/core/dtos';
import { CityEntity, CountryEntity, StateEntity } from 'src/core/entities';

export class TestStatic {
  static countryData(): CountryEntity {
    const country = new CountryEntity();
    country.id = 1;
    country.language = 'Português';
    country.name = 'Brasil';
    country.createdAt = new Date();
    country.updatedAt = new Date();
    country.deletedAt = null;

    return country;
  }

  static countryDto(): CreateCountryDto {
    const countryBodyDto = new CreateCountryDto();
    countryBodyDto.language = 'Português';
    countryBodyDto.name = 'Brasil';

    return countryBodyDto;
  }

  static countriesData(): CountryEntity[] {
    const countries = ['Brasil', 'Canada', 'China'].map((name, index) => {
      const country = new CountryEntity();
      country.id = index + 1;
      country.language = 'Português';
      country.name = name;
      country.createdAt = new Date(`2023-02-1${index + 1} 12:06:12.090`);
      country.updatedAt = new Date(`2023-02-1${index + 1} 12:06:12.090`);
      country.deletedAt = null;

      return country;
    });

    return countries;
  }

  static stateData(): StateEntity[] {
    const state = new StateEntity();
    state.country = this.countryData;
    state.country_id = 1;
    state.createdAt = new Date();
    state.deletedAt = null;
    state.id = 1;
    state.initials = 'SC';
    state.name = 'Santa Catarina';
    state.updatedAt = new Date();

    return state;
  }

  static findStateDto(): CreateStateDto {
    const stateDto = new CreateStateDto();
    stateDto.country_id = 1;
    stateDto.initials = 'SC';
    stateDto.name = 'Santa Catarina';

    return stateDto;
  }

  static cityData(): CityEntity[] {
    const city = new CityEntity();
    city.id = 1;
    city.createdAt = new Date();
    city.deletedAt = null;
    city.name = 'São José';
    city.state = this.stateData;

    return city;
  }

  static cityDto(): CreateCityDto {
    const cityBodyDto = new CreateCityDto();
    cityBodyDto.name = 'São José';
    cityBodyDto.state_id = 1;

    return cityBodyDto;
  }
}
