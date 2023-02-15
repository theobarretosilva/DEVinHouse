import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class AddressDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'O CEP é obrigatório!' })
  @IsString({ message: 'O CEP deve ser uma string!' })
  readonly zipCode: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A rua é obrigatória!' })
  @IsString({ message: 'A rua deve ser uma string!' })
  readonly street: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O número da sua residência é obrigatório!' })
  @IsNumber()
  readonly number: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'O seu bairro é obrigatório!' })
  @IsString({ message: 'O bairro deve ser uma string!' })
  readonly neighborhood: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A cidade é obrigatória!' })
  @IsString({ message: 'A cidade deve ser uma string!' })
  readonly city: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O estado é obrigatório!' })
  @IsString({ message: 'O estado deve ser uma string!' })
  readonly state: string;

  @ApiProperty()
  readonly complement: string | null;
}
