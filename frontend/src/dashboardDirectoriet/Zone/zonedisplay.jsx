import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";

const ZoneDisplay = () => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/addzone/delete/${id}`)
      .then((response) => {
        setWoredasData(formData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [formData, setWoredasData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/addzone")
      .then((response) => {
        setWoredasData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex  justify-center items-center px-1 lg:px-20 py-5">
      <table className="table-auto w-full">
        <thead className="bg-gray-500 sticky top-16">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Zone Name</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {formData.map((datas) => {
            return (
              <tr key={datas.id} className="bg-gray-100">
                <td className="border px-4 py-2">{datas.id}</td>
                <td className="border px-4 py-2">{datas.name}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <Link
                      to={`/regionDashboard/manageZone/update/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 hover:bg-gray-400 rounded-sm py-1">
                        <FiEdit color="blue" size={32} /> 
                      </button>
                    </Link>
                    <Link
                      to={`/regionDashboard/manageZone/view/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 hover:bg-gray-400 rounded-sm py-1">
                        <GrView color="white" size={32} /> 
                      </button>
                    </Link>
                    <button
                      className="hover:bg-gray-400 rounded-sm py-1 px-2"
                      onClick={() => handleDelete(datas.id)}
                    >
                      <RiDeleteBin6Line color="red" size={32} />
                    </button>
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

export default ZoneDisplay;
