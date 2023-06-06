const multer = require("multer");
const db = require("../config/connection_db.js");
const path =require('path')

// img storage config
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "backend/uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  const allowedMimeTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only PDF, JPEG, and PNG files are allowed"));
  }
};

const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

// Controller for creating a new post
const createPost = (req, res) => {
  const { title, description } = req.body;
  const image = req.file.filename;
  const time = new Date();

  // Perform the MySQL query to insert the new post
  const query =
    "INSERT INTO posts (image, title, description, time) VALUES (?, ?, ?, ?)";
  db.query(
    query,
    [image, title, description, time],
    (error, results) => {
      if (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Error creating post" });
      } else {
        res.status(201).json({ message: "Post created successfully" });
      }
    }
  );
};

// Controller for retrieving all posts
const getAllPosts = (req, res) => {
  // Perform the MySQL query to retrieve all posts
  const query = "SELECT * FROM posts";
  db.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving posts:", error);
      res.status(500).json({ error: "Error retrieving posts" });
    } else {
      res.status(200).json(results);
    }
  });
};

// Controller for updating a post
const updatePost = (req, res) => {
  const postId = req.params.id;
  const { title, description } = req.body;

  // Perform the MySQL query to update the post
  const query = "UPDATE posts SET title = ?, description = ? WHERE id = ?";
  db.query(query, [title, description, postId], (error, results) => {
    if (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ error: "Error updating post" });
    } else {
      res.status(200).json({ message: "Post updated successfully" });
    }
  });
};

// Controller for deleting a post
const deletePost = (req, res) => {
  const postId = req.params.id;

  // Perform the MySQL query to delete the post
  const query = "DELETE FROM posts WHERE id = ?";
  db.query(query, [postId], (error, results) => {
    if (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ error: "Error deleting post" });
    } else {
      res.status(200).json({ message: "Post deleted successfully" });
    }
  });
};

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  upload,
};