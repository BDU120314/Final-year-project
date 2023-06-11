import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";

const KebeleDisplay = () => {
  const [admin, setAdmin] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setWoredasData] = useState([]);
  useEffect(() => {
    const adminData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/woreda/${user.rep_id}`
      );
      setAdmin(response.data.rows[0]);
    };
    adminData();
  }, [user.rep_id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/addkebele/delete/${id}`)
      .then((response) => {
        setWoredasData(formData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(admin.woreda_id)
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/addkebele/fetch/${admin.woreda_id}`)
      .then((response) => {
        console.log(response.data, "woreda id");
        setWoredasData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [admin]);

  return (
    <div className="flex justify-center items-center px-20">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Kebele Name</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((datas) => {
            return (
              <tr key={datas.id} className="bg-gray-100">
                <td className="border px-4 py-2">{datas.id}</td>
                <td className="border px-4 py-2">{datas.kebele_name}</td>
                <td className="border px-4 py-2">
                  <div className="flex justify-center items-center gap-2">
                    <Link
                      to={`/woredaDashboard/managekebele/update/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 hover:bg-blue-400">
                        <FiEdit color="blue" size={32} />
                      </button>
                    </Link>
                    <Link
                      to={`/woredaDashboard/managekebele/view/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 hover:bg-yellow-300">
                        <GrView color="white" size={32} />  
                      </button>
                    </Link>
                    <button className="hover:bg-red-400" onClick={() => handleDelete(datas.id)}>
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

export default KebeleDisplay;
