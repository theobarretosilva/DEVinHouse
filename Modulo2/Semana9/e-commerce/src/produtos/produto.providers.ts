import { DataSource } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

export const produtoProviders = [
  {
    provide: 'PRODUTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProdutoEntity),
    inject: ['DATA_SOURCE'],
  },
];
