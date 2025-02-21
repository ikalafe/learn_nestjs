import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://daniyaldehghan2021:5UcUZbsYRCGYBBNu@postclustor.jogj8.mongodb.net/post_db?retryWrites=true&w=majority&appName=PostClustor',
    ),
    UserModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
