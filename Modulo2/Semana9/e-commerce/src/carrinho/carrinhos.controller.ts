import { Controller } from '@nestjs/common';
import { CarrinhosService } from './carrinhos.service';

@Controller('carrinho')
export class CarrinhosController {
  constructor(private service: CarrinhosService) {}
}
