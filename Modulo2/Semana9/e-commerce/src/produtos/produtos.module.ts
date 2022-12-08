import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { produtosDatabase } from './produtos.database';
import { ProdutosService } from './produtos.service';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, produtosDatabase],
})
export class ProdutosModule {}
