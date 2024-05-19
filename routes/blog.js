const express = require("express");
const router = express.Router();

//import controller
const{createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");
const {createLike, createUnlike} = require("../controllers/LikeController");


//mapping 
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", createLike);
router.post("/likes/unlike", createUnlike);

//export
module.exports = router;