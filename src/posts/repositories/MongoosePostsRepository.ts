import type PostsRepository from "./types";
import type PostStructure from "../types";
import { type Model } from "mongoose";

class MongoosePostsRepository implements PostsRepository {
  constructor(public postModel: Model<PostStructure>) {}

  async getAll(): Promise<PostStructure[]> {
    const posts = await this.postModel.find().exec();

    return posts;
  }
}

export default MongoosePostsRepository;
