import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";

const WoredaDisplay = () => {

  const [admin, setAdmin] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const adminData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/zone/${user.rep_id}`
      );
      setAdmin(response.data[0]);
    };
    adminData();
  }, [user.rep_id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/addworeda/delete/${id}`)
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
      .get(`http://localhost:5001/api/v1/addworeda/fetch/${admin.zone_id}`)
      .then((response) => {
        setWoredasData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [admin]);

  return (
    <div className="flex justify-center items-center px-20">
      
      <table className="table-auto w-full">
      <thead className="bg-gray-500 sticky top-[70px]">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Woreda Name</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((datas) => {
            return (
              <tr key={datas.id} className="bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{datas.id}</td>
                <td className="border border-gray-400 px-4 py-2">{datas.name}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <Link
                      to={`/zoneDashboard/manageWoreda/update/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 hover:bg-gray-400 rounded-sm py-2">
                        <FiEdit color="blue" size={32} />
                      </button>
                    </Link>
                    <Link
                      to={`/zoneDashboard/manageWoreda/view/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 hover:bg-gray-400 rounded-sm py-2">
                        <GrView color="white" size={32} /> 
                      </button>
                    </Link>
                    <button
                      className="hover:bg-gray-400 rounded-sm py-1"
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

export default WoredaDisplay;
