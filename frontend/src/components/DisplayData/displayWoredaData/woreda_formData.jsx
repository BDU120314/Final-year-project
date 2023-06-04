import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const WoredaData = () => {
  const [woredaData, setWoredData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/woreda/delete/${id}`)
      .then((response) => {
        setWoredData(woredaData.filter((item) => item.id !== id));
        console.log(`deleted user id: ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/woreda")
      .then((response) => {
        setWoredData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center px-8">
      <div className="max-w-none w-full">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {woredaData.map((datas, index) => (
              <tr
                key={datas.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="border px-4 py-2">{datas.id}</td>
                <td className="border px-4 py-2">{datas.fname}</td>
                <td className="border px-4 py-2">{datas.mname}</td>
                <td className="border px-4 py-2">{datas.email}</td>
                <td className="border px-4 py-2">{datas.phone_number}</td>
                <td className="border px-4 py-2">{datas.user_name}</td>
                <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                  <Link
                    to={`/zone_dashboard/manageland/update/${datas.id}`}
                    className="px-2 bg-blue-700 rounded-sm"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/zone_dashboard/manageland/view/${datas.id}`}
                    className="px-2 bg-gray-300 rounded-sm"
                  >
                    View
                  </Link>
                  <button
                    className="px-2 bg-red-400 rounded-sm"
                    onClick={() => handleDelete(datas.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WoredaData;
