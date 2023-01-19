import { UserEntity } from 'src/users/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'tweets' })
export class TweetEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  text: string;

  @ManyToOne(() => UserEntity, (user) => user.tweets)
  @JoinColumn()
  userId: number;

  @CreateDateColumn()
  date: string;
}
