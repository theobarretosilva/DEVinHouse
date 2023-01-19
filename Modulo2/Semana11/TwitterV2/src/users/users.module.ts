import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/core/database/database.providers';
import { userProviders } from './user.providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [],
  providers: [...databaseProviders, ...userProviders, UsersService],
})
export class UsersModule {}
