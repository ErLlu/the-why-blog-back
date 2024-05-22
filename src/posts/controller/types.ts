import { type NextFunction, type Request, type Response } from "express";

interface PostsControllerStructure {
  getPosts(req: Request, res: Response, next: NextFunction): void;
}

export default PostsControllerStructure;
