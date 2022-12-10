import { IsNotEmpty, IsString } from 'class-validator';
import { categoriasProdutos } from '../utils/categoriasProdutos';

export class ProdutoDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  readonly stok: number;

  readonly category: string;
}
