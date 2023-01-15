import { Inject, Injectable } from '@nestjs/common';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { CarrinhoDTO } from './carrinho.dto';
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

  async addProduct(carrinhoDTO: CarrinhoDTO) {
    return new Promise(async (resolve) => {
      const { products } = carrinhoDTO;
      const carrinho = this.carrinhoRepository.create();
      carrinho.products = products;
      const carrinhoCreated = this.carrinhoRepository.save(carrinho);
      resolve(carrinhoCreated);
    });
  }

  async deleteProduct(productName: string) {
    return await this.carrinhoRepository
      .createQueryBuilder('carrinho')
      .delete()
      .from(CarrinhoEntity)
      .where('products = :productName', { productName: productName })
      .execute();
  }
}
