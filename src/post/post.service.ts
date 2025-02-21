import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import mongoose, { Model } from 'mongoose';
import { CreatePostDTO } from './dtos/create_post.dto';
import { UpdatePostDTO } from './dtos/update_post.dto';
import { UpdatePostPatchDTO } from './dtos/update_post_patch.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: CreatePostDTO) {
    const createPost = new this.postModel(data);

    const post = await createPost.save();

    return post;
  }

  async findAll() {
    const posts = await this.postModel.find();
    return posts;
  }

  async getOne(id: string) {
    const post = await this.postModel.findOne({ _id: id });
    if (!post) {
      throw new NotFoundException(`Post with ${id} Not Found ):`);
    }
    return post;
  }

  async update(id: string, requestBody: UpdatePostDTO) {
    const post = await this.getOne(id);

    post.title = requestBody.title;
    post.description = requestBody.description;

    return post.save();
  }

  async updateOne(id: string, requestBody: UpdatePostPatchDTO) {
    const post = await this.getOne(id);
    Object.assign(post, requestBody);
    return post.save();
  }

  async deleteOne(id: string) {
    await this.getOne(id);
    await this.postModel.deleteOne({ _id: id });
  }
}
