import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { ProdutoDTO } from 'src/produtos/dto/produto.dto';

export class CarrinhoDTO {
  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProdutoDTO)
  readonly products: ProdutoDTO;
}
