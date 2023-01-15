import { Controller, Get } from '@nestjs/common';
import { CarrinhosService } from './carrinhos.service';

@Controller('carrinho')
export class CarrinhosController {
  constructor(private carrinhoService: CarrinhosService) {}

  @Get()
  async getCarrinho() {
    return await this.carrinhoService.produtosNoCarrinho();
  }
}
