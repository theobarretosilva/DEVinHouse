import { IsNotEmpty, IsString } from 'class-validator';

export class ProdutoDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly stok: number;

  @IsNotEmpty()
  readonly category: string;
}
