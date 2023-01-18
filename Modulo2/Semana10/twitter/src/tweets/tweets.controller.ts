import { TweetsService } from './tweets.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateTweetDTO } from './dto/createTweet.dto';

@Controller('tweets')
export class TweetsController {
  constructor(private tweetService: TweetsService) {}

  @Post('/newTweet')
  async newTweet(@Body() createTweetDTO: CreateTweetDTO) {
    return await this.tweetService.newTweet(createTweetDTO);
  }

  @Get('/allTweets')
  async allTweets() {
    return await this.tweetService.allTweets();
  }

  @Get('/tweetsByUser/:userId')
  async tweetsByUser(@Param('userId') userId: number) {
    return await this.tweetService.tweetsByUser(userId);
  }

  @Get('tweetsByHash/:hashtag')
  async tweetsByHashtag(@Param('hashtag') hashtag: string) {
    return await this.tweetService.tweetsByHashtag(hashtag);
  }
}
