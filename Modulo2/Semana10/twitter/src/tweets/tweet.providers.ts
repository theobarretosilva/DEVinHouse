import { UserEntity } from 'src/users/user.entity';
import { DataSource } from 'typeorm/data-source';
import { TweetEntity } from './tweet.entity';

export const tweetProviders = [
  {
    provide: 'TWEETS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(TweetEntity),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
