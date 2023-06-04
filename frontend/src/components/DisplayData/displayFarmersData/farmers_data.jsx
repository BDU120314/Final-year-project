import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";

const FarmersData = () => {
  const [farmersData, setFarmersData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/farmers")
      .then((response) => {
        setFarmersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center px-2 sm:px-10 lg:px-20">
      <table className="table-auto w-full">
        <thead className="bg-gray-500 sticky top-16">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="hidden lg:table-cell px-4 py-2">Middle Name</th>
            <th className="hidden lg:table-cell px-4 py-2">Email Address</th>
            <th className="hidden lg:table-cell px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2 w-auto">Action</th>
          </tr>
        </thead>
        <tbody>
          {farmersData.map((datas) => {
            return (
              <tr key={datas.id} className="bg-gray-100">
                <td className="border px-4 py-2">{datas.id}</td>
                <td className="border px-4 py-2">{datas.fname}</td>
                <td className="hidden lg:table-cell border px-4 py-2">{datas.mname}</td>
                <td className="hidden lg:table-cell border px-4 py-2">{datas.email}</td>
                <td className="hidden lg:table-cell border px-4 py-2">{datas.phone_number}</td>
                <td className="border px-4 py-2">{datas.user_name}</td>
                <td className="gap-2 py-2 px-4">
                  <div className="flex justify-center items-center gap-2">
                    <Link
                      to={`/landadmin_dashboard/manage_farmers/update/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2">
                        <FiEdit color="blue" size={20} /> Edit
                      </button>
                    </Link>
                    <Link
                      to={`/landadmin_dashboard/manage_farmers/view/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2">
                        <GrView color="white" size={20} /> Detail
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FarmersData;
