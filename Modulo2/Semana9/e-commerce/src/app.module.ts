import { Module } from '@nestjs/common';
import { CarrinhosModule } from './carrinho/carrinhos.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ProdutosModule, CarrinhosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
