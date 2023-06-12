import React, { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const ZoneEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [woredas, setWoredas] = useState([]);
  const [selectedWoreda, setSelectedWoreda] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const reactQuillRef = useRef(null);
  const token = user.token;

  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const adminData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/zone/${user.rep_id}`
      );
      setAdmin(response.data[0]);
    };
    adminData();
  }, [user.rep_id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/addworeda/fetch/${admin.zone_id}`)
      .then((response) => {
        setWoredas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [admin]);

  // useEffect(() => {
  //   const fetchworedas = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5001/api/v1/addworeda"
  //       );
  //       setWoredas(response.data);
  //     } catch (error) {
  //       console.error("Error fetching woredas", error);
  //     }
  //   };

  //   fetchworedas();
  // }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleWoredaChange = (e) => {
    setSelectedWoreda(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editor = reactQuillRef.current.getEditor();
    const content = editor.root.innerHTML;
    const plainTextContent = stripHtmlTags(content);

    // Replace "your_backend_url" with the actual URL of your backend API
    const url = "http://localhost:5001/api/v1/report";

    try {
      // Make a POST request to create a new report
      const response = await axios.post(
        url,
        {
          title,
          content: plainTextContent,
          woreda_id: selectedWoreda,
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
    <div className="p-4">
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
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="zone">
            Woreda
          </label>
          <select
            className="border border-gray-300 outline-none rounded-md px-3 py-2 w-full"
            id="owreda"
            value={selectedWoreda}
            onChange={handleWoredaChange}
          >
            <option value="">Select Woreda</option>
            {woredas.map((zone) => (
              <option key={zone.id} value={zone.id}>
                {zone.name}
              </option>
            ))}
          </select>
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

export default ZoneEditor;
