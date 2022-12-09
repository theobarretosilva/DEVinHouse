import { IsEmpty, IsNumber, IsString } from 'class-validator';
import { categoriasProdutos } from './utils/categoriasProdutos';

export class ProdutoDTO {
  @IsEmpty({
    message: 'O nome é obrigatório!',
  })
  @IsString()
  readonly name: string;

  @IsEmpty({
    message: 'O preço é obrigatório!',
  })
  @IsNumber()
  readonly price: number;

  @IsEmpty({
    message: 'A descrição é obrigatória!',
  })
  @IsString()
  readonly description: string;

  @IsEmpty({
    message: 'A quantidade em estoque é obrigatório!',
  })
  @IsNumber()
  readonly stok: number;

  @IsEmpty({
    message: 'A categoria é obrigatória!',
  })
  readonly category: categoriasProdutos;
}
