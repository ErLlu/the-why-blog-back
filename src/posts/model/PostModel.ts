import mongoose, { Schema } from "mongoose";
import type PostStructure from "../types";

export const postSchema = new Schema<PostStructure>({
  _id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    require: true,
    unique: true,
  },
  author: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: false,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG2yAn40uYWhENP-hGDrjbBf_K8_FzvaxHnrQ_zeXdQ&s",
  },
  alternativeText: {
    type: String,
    require: true,
    default: "un libro abierto",
  },
});

export const PostModel = mongoose.model("Post", postSchema, "Posts");
