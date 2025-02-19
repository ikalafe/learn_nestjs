import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PostMiddleware } from './middleware/post.middleware';

@Module({
  imports: [PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('/')
      .forRoutes({ path: 'posts', method: RequestMethod.ALL });

    consumer
      .apply(PostMiddleware)
      .forRoutes({ path: 'post', method: RequestMethod.GET });
  }
}
