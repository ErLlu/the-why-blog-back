import type PostStructure from "./types";

class Post implements PostStructure {
  _id: string;
  title: string;
  author: string;
  date: Date;
  imageUrl: string;
  alternativeText: string;
  content: string;
}

export default Post;
