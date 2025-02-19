import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PostMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('post middleware...');
    next();
  }
}
