import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarrinhoDTO } from './carrinho.dto';
import { CarrinhosService } from './carrinhos.service';

@Controller('carrinho')
export class CarrinhosController {
  constructor(private carrinhoService: CarrinhosService) {}

  @Get()
  async getCarrinho() {
    return await this.carrinhoService.produtosNoCarrinho();
  }

  @Post()
  async addProduct(@Body() carrinhoDTO: CarrinhoDTO) {
    return await this.carrinhoService.addProduct(carrinhoDTO);
  }
}
