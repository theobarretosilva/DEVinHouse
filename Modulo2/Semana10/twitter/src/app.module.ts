import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './core/database/database.providers';
import { tweetProviders } from './tweets/tweet.providers';
import { TweetsModule } from './tweets/tweets.module';
import { userProviders } from './users/user.providers';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UsersModule,
    TweetsModule,
  ],
  controllers: [],
  providers: [...databaseProviders, ...userProviders, ...tweetProviders],
})
export class AppModule {}
