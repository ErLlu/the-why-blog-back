import type PostsRepository from "./types";
import type PostStructure from "../types";
import type mongoose from "mongoose";

class MongoosePostsRepository implements PostsRepository {
  constructor(public postModel: mongoose.Model<PostStructure>) {}

  async getAll(): Promise<PostStructure[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }
}

export default MongoosePostsRepository;
