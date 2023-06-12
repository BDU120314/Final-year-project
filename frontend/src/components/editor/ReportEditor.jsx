import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const ReportForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const reactQuillRef = useRef(null);
  const token = user.token;
const [admin, setAdmin] = useState({})
const LandAdmin_id = user.rep_id
const role =user.role
useEffect(() => {
  let value;
  console.log(role);
  switch (role) {
    case "Land_Admin":
      value = "kebele";
      break;
    case "Woreda_Admin":
      value = "woreda";
      break;
    case "Zone_Admin":
      value = "zone";
      break;
    default:
      break;
  }

  const fetchedData = async () => {
    const response = await axios.get(
      `http://localhost:5001/api/v1/${value}/${LandAdmin_id}`
    );
    setAdmin(response.data);
  };

  if (value && LandAdmin_id) {
    fetchedData();
  }
}, [LandAdmin_id, role]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const editor = reactQuillRef.current.getEditor();
  const content = editor.root.innerHTML;
  const plainTextContent = stripHtmlTags(content);

  // Replace "your_backend_url" with the actual URL of your backend API
  const url = "http://localhost:5001/api/v1/report";

  let id;
  let valueParam;

  switch (role) {
    case "Land_Admin":
      if (admin[0] && admin[0].kebele_id) {
        id = admin[0].kebele_id;
        valueParam = "kebele_id";
      }
      break;
    case "Woreda_Admin":
      if (admin.rows[0] && admin.rows[0].woreda_id) {
        id = admin.rows[0].woreda_id;
        valueParam = "woreda_id";
      }
      break;
    case "Zone_Admin":
      if (admin[0] && admin[0].zone_id) {
        id = admin[0].zone_id;
        valueParam = "zone_id";
      }
      break;
    default:
      break;
  }

  // Check if valueParam is valid
  if (valueParam) {
    try {
      // Make a POST request to create a new report
      const response = await axios.post(
        url,
        {
          title,
          content: plainTextContent,
          [valueParam]: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle the response if needed
      // console.log(response.data, "result after inserted");

      // Reset the form
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating report", error);
    }
  } else {
    console.error("Invalid role or missing ID");
  }
};


  const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    ["clean"],
  ];

  return (
    <div className="p-4 mt-[70px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="border border-gray-300 outline-none rounded-md px-3 py-2 w-full"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <ReactQuill
            ref={reactQuillRef}
            value={content}
            onChange={handleContentChange}
            placeholder="Enter the content"
            modules={{
              toolbar: toolbarOptions,
            }}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
