import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ZoneData = () => {
  const [zoneData, setZoneData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/zone/delete/${id}`)
      .then((response) => {
        setZoneData(zoneData.filter((item) => item.id !== id));
        console.log(`deleted user id :${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/zone")
      .then((response) => {
        setZoneData(response.data);
        console.log(zoneData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zoneData]);

  return (
    <div className="flex  justify-center   items-center ">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First NAme</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Email Address</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Zone ID</th>
            <th className="px-4 py-2 w-auto">Action</th>
          </tr>
        </thead>
        <tbody>
          {zoneData.map((datas, index) => {
            return (
              <tr
                key={datas.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="px-4 py-2">{datas.id}</td>
                <td className="px-4 py-2">{datas.fname} </td>
                <td className="px-4 py-2">{datas.mname}</td>
                <td className="px-4 py-2">{datas.email}</td>
                <td className="px-4 py-2">{datas.phone_number}</td>
                <td className="px-4 py-2">{datas.user_name}</td>
                <td className="px-4 py-2">{datas.zone_id}</td>
                <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                  <Link
                    to={`/regionDashboard/manageZoneAdmin/update/${datas.id}`}
                    className="px-2 bg-blue-700 rounded-sm"
                  >
                    Edit
                  </Link>

                  <Link
                    to={`/regionDashboard/manageZoneAdmin/view/${datas.id}`}
                    className="px-2 bg-gray-300 rounded-sm"
                  >
                    <button>View</button>
                  </Link>

                  <button
                    className="bg-red-400 rounded-sm"
                    onClick={() => handleDelete(datas.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ZoneData;
