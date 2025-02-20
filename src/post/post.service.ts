import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDTO } from './dtos/create_post.dto';
import { ResponsePostDTO } from './dtos/response_post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: CreatePostDTO): Promise<ResponsePostDTO> {
    const createPost = new this.postModel(data);

    const post = await createPost.save();

    const postDTO = new ResponsePostDTO();
    postDTO.title = post.title;
    postDTO.description = post.description;
    postDTO._id = post._id.toString();

    return postDTO;
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
