import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostModule],
})
export class PostModule {}
