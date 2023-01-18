import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome é obrigatório!' })
  @IsString({ message: 'O nome deve ser uma string!' })
  readonly name: string;

  @IsNotEmpty({ message: 'O nome de usuário é obrigatório!' })
  @IsString({ message: 'O nome de usuário deve ser uma string!' })
  readonly user: string;

  @IsNotEmpty({ message: 'O email é obrigatório!' })
  @IsString({ message: 'O email deve ser uma string!' })
  @IsEmail(undefined, { message: 'O e-mail informado não é válido!' })
  readonly email: string;

  @IsNotEmpty({ message: 'O link da foto é obrigatório!' })
  @IsString({ message: 'O link da foto deve ser uma string!' })
  readonly photoUrl: string;
}
