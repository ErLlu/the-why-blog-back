import type Post from "../Post";
import type PostsRepository from "./types";

class InMemoryPostsRepository implements PostsRepository {
  constructor(public posts: Post[]) {}

  async getAll(): Promise<Post[]> {
    return this.posts;
  }
}

export default InMemoryPostsRepository;
