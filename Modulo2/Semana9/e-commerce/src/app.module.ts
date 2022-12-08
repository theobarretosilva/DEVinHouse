import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarrinhosModule } from './carrinho/carrinhos.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    ProdutosModule,
    CarrinhosModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
