import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplaySingleData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/farmers/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="left-[17.5% px-5]">
      <div className="flex justify-center flex-col items-center mx-0 ">
        <h2 className="text-[16px] text-gray-700 py-[25px] font-bold leading-6">
          Detail information of farmers
        </h2>
        <table className="table-auto w-full px-5">
          <thead className="bg-gray-300/50">
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">First name</th>
              <th className="px-4 py-2">Middle name</th>
              <th className="px-4 py-2">Last name</th>
              <th className="px-4 py-2">Birth_date</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone_number</th>
              <th className="px-4 py-2">User name</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {data.map((datas, index) => {
              return (
                <tr
                  key={datas.id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">{datas.id}</td>
                  <td className="border px-4 py-2">{datas.fname}</td>
                  <td className="border px-4 py-2">{datas.mname}</td>
                  <td className="border px-4 py-2">{datas.lname}</td>
                  <td className="border px-4 py-2">{formatDate(datas.birth_date)}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySingleData;
