import { Module } from '@nestjs/common';
import { CarrinhosController } from './carrinhos.controller';
import { CarrinhosService } from './carrinhos.service';

@Module({
  controllers: [CarrinhosController],
  providers: [CarrinhosService],
})
export class CarrinhosModule {}
