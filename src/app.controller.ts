import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TransformDTO } from './interceptors/transform_dto.interceptor';
import { ResponsePostDTO } from './post/dtos/response_post.dto';

@Controller()
@TransformDTO(ResponsePostDTO)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
