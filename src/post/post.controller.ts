import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDocument } from './schemas/post.schema';
import { CreatePostDTO } from './dtos/create_post.dto';
import { TransformDTOInterceptor } from 'src/interceptors/transform_dto.interceptor';
import { ResponsePostDTO } from './dtos/response_post.dto';
import { UpdatePostDTO } from './dtos/update_post.dto';
import { request } from 'http';
import { UpdatePostPatchDTO } from './dtos/update_post_patch.dto';

@Controller('posts')
@UseInterceptors(new TransformDTOInterceptor(ResponsePostDTO))
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() requestBody: CreatePostDTO) {
    requestBody.title;
    return this.postService.create(requestBody);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.postService.getOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() requestBody: UpdatePostDTO) {
    return this.postService.update(id, requestBody);
  }

  @Patch('/:id')
  updateOne(@Param('id') id: string, @Body() requestBody: UpdatePostPatchDTO) {
    return this.postService.updateOne(id, requestBody);
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string) {
    return this.postService.deleteOne(id);
  }
}
