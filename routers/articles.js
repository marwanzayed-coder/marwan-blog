import { Router } from "express";
import { ArticlesController } from "../controllers/articles.js";
const { newPost, getPosts, getPost, updataPost } = ArticlesController;
export const PostRouter = Router();

PostRouter.post("/newpost", newPost);
PostRouter.get("/getposts", getPosts);
PostRouter.get("/getpost/:href", getPost);
PostRouter.post("/updatapost/:id", updataPost);
