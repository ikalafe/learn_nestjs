import { PartialType } from '@nestjs/swagger';
import { CreatePostDTO } from './create_post.dto';

export class UpdatePostPatchDTO extends PartialType(CreatePostDTO) {}
