import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDocument } from './schemas/post.schema';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: PostDocument) {
    requestBody.title
    return this.postService.create(requestBody);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }
}
