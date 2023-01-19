import { Inject, Injectable } from '@nestjs/common';
import { TweetEntity } from './tweet.entity';
import { Repository } from 'typeorm';
import { CreateTweetDTO } from './dto/createTweet.dto';
import { UserEntity } from 'src/users/user.entity';

@Injectable()
export class TweetsService {
  constructor(
    @Inject('TWEETS_REPOSITORY')
    private tweetRepository: Repository<TweetEntity>,
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async newTweet(createTweetDTO: CreateTweetDTO, payload: any) {
    return new Promise(async (resolve, reject) => {
      const foundUser = this.userRepository.findOne({
        where: {
          _id: payload.id,
        },
      });
      if (foundUser) {
        const { text } = createTweetDTO;
        const tweet = this.tweetRepository.create();
        tweet.text = text;
        tweet.userId = payload.id;
        const tweetCreated = this.tweetRepository.save(tweet);
        resolve(tweetCreated);
      } else {
        reject('Algo não deu certo! Tente novamente.');
      }
    });
  }

  async allTweets() {
    return await this.tweetRepository.find({
      order: {
        date: 'DESC',
      },
    });
  }

  async tweetsByUser(userId: number) {
    const foundUser = await this.userRepository.findOne({
      where: {
        _id: userId,
      },
    });
    const foundTweets = await this.tweetRepository.find({
      where: {
        userId: userId,
      },
    });

    const retorno = foundTweets.forEach((tweet) => {
      return {
        nome: foundUser.name,
        usuario: foundUser.user,
        tweet: tweet.text,
        data: tweet.date,
      };
    });

    return retorno;
  }

  async tweetsByHashtag(hashtag: string) {
    const tweets = await this.tweetRepository.find();
    return tweets.find((tweet) => {
      tweet.text.toLowerCase().includes(hashtag);
    });
  }
}
