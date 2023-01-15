import { ProdutoEntity } from 'src/produtos/produto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'carrinho' })
export class CarrinhoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  user: 'usuario2508';

  @Column()
  price: number;

  @OneToMany(() => ProdutoEntity, (produto) => produto.name)
  @JoinColumn()
  products: ProdutoEntity;
}
