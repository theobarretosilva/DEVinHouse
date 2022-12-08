import { Injectable } from '@nestjs/common/decorators';
import { produtosDatabase } from './produtos.database';

@Injectable()
export class ProdutosService {
  constructor(private database: produtosDatabase) {}
}
