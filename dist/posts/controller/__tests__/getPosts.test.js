import PostController from "../PostsController";
describe("Given a PostController getPosts method", () => {
  describe("When it receives a Response", () => {
    const posts = [
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
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const postsRepository = {
      getAll: async () => posts,
    };
    const next = jest.fn();
    const postController = new PostController(postsRepository);
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test("Then it should  call its status method with 200", async () => {
      await postController.getPosts(req, res, next);
      expect(res.status).toHaveBeenCalledWith(200);
    });
    test("Then it should call its json method with a posts list", async () => {
      await postController.getPosts(req, res, next);
      expect(res.json).toHaveBeenCalledWith({ posts });
    });
  });
});
//# sourceMappingURL=getPosts.test.js.map
