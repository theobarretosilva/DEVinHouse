import { Module } from '@nestjs/common';
import { CarrinhosController } from './carrinhos.controller';
import { carrinhosDatabase } from './carrinhos.database';
import { CarrinhosService } from './carrinhos.service';

@Module({
  controllers: [CarrinhosController],
  providers: [CarrinhosService, carrinhosDatabase],
})
export class CarrinhosModule {}
