import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { tweetProviders } from './tweet.providers';
import { TweetsController } from './tweets.controller';
import { TweetsService } from './tweets.service';

@Module({
  controllers: [TweetsController],
  imports: [],
  providers: [...databaseProviders, ...tweetProviders, TweetsService],
})
export class TweetsModule {}
