import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const PestiSide = () => {
  const [postData, setPostData] = useState([]);
  const location = useLocation();
  const filter = new URLSearchParams(location.search).get("filter");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/posts");
      const filteredData = response.data.filter((post) =>
        post.title.includes(filter)
      );
      setPostData(filteredData);
    };
    fetchData();
  }, [filter]);

  const MAX_LINES = 2; // Maximum number of lines to show for description

  const toggleDescription = (postId) => {
    setPostData((prevData) =>
      prevData.map((post) => {
        if (post.id === postId) {
          return { ...post, showMore: !post.showMore };
        }
        return post;
      })
    );
  };

  const truncateDescription = (description) => {
    const lines = description.split("\n");
    if (lines.length <= MAX_LINES) {
      return description;
    }
    const truncatedLines = lines.slice(0, MAX_LINES);
    return truncatedLines.join("\n") + " ...";
  };

const convertToEthiopianDate = (time) => {
  const serverTime = new Date(time);
  const ethiopianYear = serverTime.getFullYear() - 8;
  const ethiopianMonth = serverTime.getMonth() + 5; // Adjusted to +1
  const ethiopianDay = serverTime.getDate() - 6; // Adjusted to -6
  if (ethiopianDay <= 0) {
    // If the day is negative or zero, adjust the month and year accordingly
    const daysInEthiopianMonth = 30; // Assuming 30 days in each month (you can adjust it as per the Ethiopian calendar)
    const ethiopianMonthDays = ethiopianMonth === 1 ? 13 : daysInEthiopianMonth; // The first month has 13 days in Ethiopian calendar
    const prevEthiopianMonth = ethiopianMonth === 1 ? 13 : ethiopianMonth - 1;
    const prevEthiopianYear =
      ethiopianMonth === 1 ? ethiopianYear - 1 : ethiopianYear;
    const adjustedEthiopianDay = ethiopianDay + ethiopianMonthDays;
    return `${adjustedEthiopianDay}/${prevEthiopianMonth}/${prevEthiopianYear}`;
  }
  return `${ethiopianDay}/${ethiopianMonth}/${ethiopianYear}`;
};


  return (
    <div className="">
      <div className="flex justify-center items-center bg-gray-100">
        <div className="grid grid-cols-3 gap-10 place-content-evenly">
          {postData.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-lg shadow-lg p-4 relative"
            >
              <img
                src={`http://localhost:5001/backend/uploads/${post.image}`}
                alt={post.id}
                className="max-w-full h-[48%] object-cover"
              />
              <h3 className="text-xl font-bold mt-2 mb-1">{post.title}</h3>
              <p className="text-md text-gray-500 leading-6">
                {post.showMore
                  ? post.description
                  : truncateDescription(post.description)}
              </p>
              {post.description.split("\n").length > MAX_LINES && (
                <div className="flex items-center mt-2">
                  <span className="text-gray-500">
                    {post.showMore ? "" : "..."}
                  </span>
                  <button
                    className="text-sm text-blue-500 hover:underline ml-1"
                    onClick={() => toggleDescription(post.id)}
                  >
                    {post.showMore ? "Read Less" : "Read More"}
                  </button>
                </div>
              )}
              <span className="flex justify-end items-end">
                Posted at: {convertToEthiopianDate(post.time)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PestiSide;
