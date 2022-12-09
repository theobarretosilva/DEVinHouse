import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { categoriasProdutos } from './utils/categoriasProdutos';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column('float')
  price: number;

  @Column()
  description: string;

  @Column('int')
  stock: number;

  @Column('int')
  category: categoriasProdutos;
}
