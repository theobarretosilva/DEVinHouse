import { Inject, Injectable } from '@nestjs/common/decorators';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async insert(produto: ProdutoEntity) {
    return await this.produtoRepository.insert(produto);
  }

  async findAll(): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.find();
  }
}
