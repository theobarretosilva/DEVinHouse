import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  MinLength,
  IsEmail,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Match } from 'src/core/constraints/match.decorator';
import { AddressDTO } from './address.dto';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'O nome completo é obrigatório!' })
  @IsString({ message: 'O nome completo deve ser uma string!' })
  readonly fullName: string;

  @ApiProperty()
  readonly photoUrl: string =
    'https://github.com/theobarretosilva/Connect-Lab/blob/main/Connect-Lab/src/assets/imgs/userGenerico.png?raw=true';

  @ApiProperty()
  @IsNotEmpty({ message: 'O email é obrigatório!' })
  @IsString({ message: 'O email deve ser uma string!' })
  @IsEmail(undefined, { message: 'O e-mail informado não é válido!' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A senha é um campo obrigatório!' })
  @IsString({ message: 'A senha deve ser uma string!' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres!' })
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A confirmação da senha é obrigatória!' })
  @IsString({ message: 'A confirmação da senha deve ser uma string!' })
  @MinLength(8, {
    message: 'A confirmação da senha deve ter no mínimo 8 caracteres!',
  })
  @Match('password', { message: 'As senhas não estão iguais, revise-as!' })
  readonly confirmPassword: string;

  @ApiProperty()
  readonly phone: string | null;

  @ApiProperty()
  @IsNotEmpty({ message: 'O endereço é obrigatório!' })
  @ValidateNested()
  @Type(() => AddressDTO)
  readonly address: AddressDTO;
}
