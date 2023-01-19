import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './core/auth/auth.module';
import { authProviders } from './core/auth/auth.providers';
import { databaseProviders } from './core/database/database.providers';
import { tweetProviders } from './tweets/tweet.providers';
import { TweetsModule } from './tweets/tweets.module';
import { userProviders } from './users/user.providers';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    TweetsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...tweetProviders,
    ...authProviders,
  ],
})
export class AppModule {}
