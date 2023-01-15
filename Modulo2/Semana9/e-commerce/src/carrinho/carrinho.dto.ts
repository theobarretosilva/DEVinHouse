import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { ProdutoDTO } from 'src/produtos/produto.dto';

export class CarrinhoDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProdutoDTO)
  readonly products: ProdutoDTO;
}
