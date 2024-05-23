import mongoose, { Schema } from "mongoose";
import type PostStructure from "../types";

const postSchema = new Schema<PostStructure>({
  _id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG2yAn40uYWhENP-hGDrjbBf_K8_FzvaxHnrQ_zeXdQ&s",
  },
  alternativeText: {
    type: String,
    required: true,
    default: "un libro abierto",
  },
});

const Post = mongoose.model("Post", postSchema, "Posts");

export default Post;
