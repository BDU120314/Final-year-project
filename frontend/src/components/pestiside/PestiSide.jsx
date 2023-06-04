import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PestiSide = () => {
  const [postData, setPostData] = useState([]);
  const location = useLocation();
  const filter = new URLSearchParams(location.search).get("filter");

  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/posts");
      const filteredData = response.data.filter((post) =>
        post.title.includes(filter)
      );
      setPostData(filteredData);
    };
    fetchedData();
  }, [filter]);

  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="grid grid-cols-3 gap-5 place-content-evenly">
        {postData.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col justify-center items-center gap-2 px-2"
            >
              <span>
                <img
                  src={`http://localhost:5001/backend/uploads/${post.image}`}
                  alt={post.id}
                  style={{
                    maxWidth: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </span>
              <span className="text-2xl font-bold leading-6">{post.title}</span>
              <span className="text-md text-gray-500 leading-6">
                {post.description}
              </span>
              <span className="text-md text-gray-500 font-bold leading-12">
                posted at: {post.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PestiSide;
