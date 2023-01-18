import { TweetEntity } from 'src/tweets/tweet.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  user: string;

  @Column()
  email: string;

  @Column()
  photoUrl: string;

  @OneToMany(() => TweetEntity, (tweet) => tweet.userId)
  tweets: TweetEntity[];
}
