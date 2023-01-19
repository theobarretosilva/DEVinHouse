import { TweetEntity } from 'src/tweets/tweet.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  @Column()
  password: string;

  @Column()
  salt: string;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
