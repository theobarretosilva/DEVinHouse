import { TweetsService } from './tweets.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateTweetDTO } from './dto/createTweet.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@UseGuards(AuthGuard('jwt'))
@Controller('tweets')
export class TweetsController {
  constructor(
    private tweetService: TweetsService,
    private jwtService: JwtService,
  ) {}

  @Post('/newTweet')
  async newTweet(@Request() request, @Body() createTweetDTO: CreateTweetDTO) {
    const authorization = request.headers.authorization;
    const token = authorization.split('Bearer ');
    const payload = this.jwtService.decode(token[1]);
    return await this.tweetService.newTweet(createTweetDTO, payload);
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
