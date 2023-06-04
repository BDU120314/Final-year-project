const express =require("express")
const { upload, createPost, getAllPosts, updatePost, deletePost } = require("../controllers/postController")
const postsRouter =express.Router()
postsRouter.post("/", upload.single("image"), createPost);
postsRouter.get('/', getAllPosts)
postsRouter.put("/update/:id", updatePost);
postsRouter.delete('/delete/:id', deletePost)

module.exports = postsRouter