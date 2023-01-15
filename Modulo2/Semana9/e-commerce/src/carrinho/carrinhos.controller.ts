import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Put(':productName')
  async deleteProduct(@Param('productName') productName: string) {
    return await this.carrinhoService.deleteProduct(productName);
  }
}
