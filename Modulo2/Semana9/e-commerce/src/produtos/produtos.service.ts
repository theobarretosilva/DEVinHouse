import { Inject, Injectable } from '@nestjs/common/decorators';
import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private userRepository: Repository<ProdutoEntity>,
  ) {}

  async criar(produto: ProdutoEntity) {
    return await this.userRepository.insert(produto);
  }
}
