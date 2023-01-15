import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { carrinhoProviders } from './carrinho.providers';
import { CarrinhosController } from './carrinhos.controller';
import { CarrinhosService } from './carrinhos.service';

@Module({
  controllers: [CarrinhosController],
  providers: [...databaseProviders, ...carrinhoProviders, CarrinhosService],
})
export class CarrinhosModule {}
