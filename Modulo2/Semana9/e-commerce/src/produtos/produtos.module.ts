import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { ProdutosController } from './produtos.controller';
import { produtoProviders } from './produto.providers';
import { ProdutosService } from './produtos.service';

@Module({
  controllers: [ProdutosController],
  providers: [...databaseProviders, ...produtoProviders, ProdutosService],
})
export class ProdutosModule {}
