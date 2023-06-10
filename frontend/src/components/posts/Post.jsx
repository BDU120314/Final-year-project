import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    axios
      .post("http://localhost:5001/api/v1/posts", formData)
      .then((response) => {
        // Do something after successful post creation
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
      setTitle("")
      setDescription("")
      setImage("")
  };

  return (
    <div className="flex justify-center mt-10 items-center mx-auto ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block mb-2 text-lg font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="py-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Post;
