import { IsNotEmpty, IsString, MaxLength, IsInt } from 'class-validator';

export class CreateTweetDTO {
  @IsNotEmpty({ message: 'O conteúdo do tweet é obrigatório!' })
  @MaxLength(280, { message: 'O tweet só pode ter até 280 caracteres!' })
  @IsString({ message: 'O conteúdo do tweet deve ser uma string!' })
  readonly text: string;

  @IsNotEmpty({ message: 'O _id do usuário é obrigatório!' })
  @IsInt({ message: 'O _id do usuário deve ser um número!' })
  readonly userId: number;
}
