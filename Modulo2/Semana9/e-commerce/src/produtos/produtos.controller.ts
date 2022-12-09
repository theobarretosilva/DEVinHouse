import { Body, Controller, Get, Post } from '@nestjs/common/decorators';
import { ProdutoEntity } from './produto.entity';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutosService) {}

  @Post()
  insert(@Body() produto: ProdutoEntity) {
    return this.produtoService.insert(produto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }
}
