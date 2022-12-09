import { IsNotEmpty } from 'class-validator';
import { ProdutoEntity } from 'src/produtos/produto.entity';

export class Carrinho {
  user: 'usuario2508';

  @IsNotEmpty({
    message: 'O preço é obrigatório!',
  })
  price: number;

  @IsNotEmpty({
    message: 'Os produtos são obrigatórios',
  })
  products: ProdutoEntity[];
}
