import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  create(data: PostDocument) {
    const createPost = new this.postModel(data);

    return createPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
