import { DataSource } from 'typeorm';
import { CarrinhoEntity } from './carrinho.entity';

export const carrinhoProviders = [
  {
    provide: 'CARRINHO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CarrinhoEntity),
    inject: ['DATA_SOURCE'],
  },
];
