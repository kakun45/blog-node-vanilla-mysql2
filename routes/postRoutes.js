// const express = require("express");
import express from "express"; // ES2020
// const postControllers = require("../controllers/postControllers");
import {
  getAllPosts,
  createNewPost,
  getPostById,
} from "../controllers/postControllers.js"; // ES2020. MUST have .js
const router = express.Router();

// @route GET && POST to /posts/
router.route("/").get(getAllPosts).post(createNewPost);

//  GET a post by its id
router.route("/:id").get(getPostById);

export default router;
