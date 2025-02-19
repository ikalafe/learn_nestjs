import { ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";

const data = [
  { id: 1, name: 'post1', description: 'post1 description' },
  { id: 2, name: 'post2', description: 'post2 description' },
  { id: 3, name: 'post3', description: 'post3 description' },
  { id: 4, name: 'post4', description: 'post4 description' },
  { id: 5, name: 'post5', description: 'post5 description' },
];

@Injectable()
export class PostService {
  getAll() {
    // throw new UnauthorizedException("daniyal");
    return data;
  }
}
