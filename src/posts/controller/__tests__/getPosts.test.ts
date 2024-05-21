import { type NextFunction, type Request, type Response } from "express";
import type PostsRepository from "../../repositories/types";
import PostController from "../PostsController";
import type Post from "../../types";

describe("Given a PostController getPosts method", () => {
  describe("When it receives a Response", () => {
    const posts: Post[] = [
      {
        alternativeText: "",
        author: "",
        _id: "",
        title: "",
        date: new Date(),
        content: "",
        imageUrl: "",
      },
    ];
    const req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const postsRepository: PostsRepository = {
      getAll: async () => posts,
    };

    const next = jest.fn();
    const postController = new PostController(postsRepository);

    beforeEach(() => {
      jest.clearAllMocks();
    });
    test("Then it should  call its status method with 200", async () => {
      await postController.getPosts(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call its json method with a posts list", async () => {
      await postController.getPosts(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ posts });
    });
  });
});
