import { Body, Controller, Post } from '@nestjs/common/decorators';
import { ProdutoEntity } from './produto.entity';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutosService) {}

  @Post()
  criar(@Body() produto: ProdutoEntity) {
    return this.produtoService.criar(produto);
  }
}
