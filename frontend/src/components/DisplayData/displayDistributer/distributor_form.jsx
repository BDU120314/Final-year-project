import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DistributorForm = () => {
  const [woredaData, setWoredData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/distributor/delete/${id}`)
      .then((response) => {
        setWoredData(woredaData.filter((item) => item.id !== id));
        console.log(`deleted user id :${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/distributor")
      .then((response) => {
        setWoredData(response.data);
        console.log(woredaData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [woredaData]);

  return (
<div className="flex justify-center items-center px-5 ">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
        <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Email Address</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Kebele Id</th>
            <th className="px-4 py-2 w-auto">Action</th>
          </tr>
        </thead>
        <tbody>
          {woredaData.map((datas, index) => {
            return (
              <tr
                key={datas.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="border px-4 py-2">{datas.id}</td>
                <td className="border px-4 py-2">{datas.fname} </td>
                <td className="border px-4 py-2">{datas.mname}</td>
                <td className="border px-4 py-2">{datas.email}</td>
                <td className="border px-4 py-2">{datas.phone_number}</td>
                <td className="border  py-2">{datas.user_name}</td>
                <td className="border px-4 py-2">{datas.kebele_id}</td>
                <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                  <Link to={`/region_dashboard/manage_distributor/update/${datas.id}`} className="link">
                  <button className="px-2 bg-blue-700 rounded-sm">Edit</button>
                  </Link>

                  <Link to={`/region_dashboard/manage_distributor/view/${datas.id}`} className="link">
                  <button className="px-2 bg-gray-300 rounded-sm">View</button>{" "}
                  </Link>

                  <button
                     className="bg-red-400"
                     onClick={() => handleDelete(datas.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DistributorForm;
