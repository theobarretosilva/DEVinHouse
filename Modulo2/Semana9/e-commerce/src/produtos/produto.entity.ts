import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @Column({ length: 100 })
  name: string;

  @Column('float')
  price: number;

  @Column()
  description: string;

  @Column('int')
  stock?: number;

  @Column()
  category: string;
}
