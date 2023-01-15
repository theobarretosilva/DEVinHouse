import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarrinhoEntity } from './carrinho.entity';

@Injectable()
export class CarrinhosService {
  constructor(
    @Inject('CARRINHO_REPOSITORY')
    private carrinhoRepository: Repository<CarrinhoEntity>,
  ) {}

  async produtosNoCarrinho() {
    return await this.carrinhoRepository.find();
  }
}
