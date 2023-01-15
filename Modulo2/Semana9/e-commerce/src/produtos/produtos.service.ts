import { Inject, Injectable } from '@nestjs/common/decorators';
import { Repository } from 'typeorm';
import { ProdutoDTO } from './produto.dto';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async insert(produto: ProdutoDTO): Promise<ProdutoEntity> {
    return new Promise(async (resolve) => {
      const response = await this.produtoRepository.insert({
        ...produto,
      });
      const { id } = response.generatedMaps[0];
      let created = new ProdutoEntity();
      created = { ...produto, id: id };
      resolve(created);
    });
  }

  async findAll(): Promise<ProdutoEntity[]> {
    return await this.produtoRepository.find();
  }

  async findOne(param): Promise<ProdutoEntity> {
    return await this.produtoRepository.findOne({
      where: {
        id: param,
      },
    });
  }

  async findByCategory(category) {
    return await this.produtoRepository.findOne({
      where: {
        category: category,
      },
    });
  }
}
