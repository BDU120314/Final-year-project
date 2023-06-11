import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const WoredaData = () => {
  const [woredaData, setWoredData] = useState([]);
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
  }, [user]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/woreda/delete/${id}`)
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
      .get(`http://localhost:5001/api/v1/woreda/fetch/${admin.zone_id}`)
      .then((response) => {
        setWoredData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [admin]);

  return (
    <div className="flex justify-center items-center px-5 ">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First NAme</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Email Address</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">User Name</th>
            <th className="px-4 py-2">Woreda ID</th>
            <th className="px-4 py-2 w-auto">Action</th>
          </tr>
        </thead>
        <tbody>
          {woredaData.map((datas) => {
            return (
              <tr key={datas.id} className="bg-gray-100/{0-4}">
                <td className="border px-4 py-2">{datas.id}</td>
                <td className="border px-4 py-2">{datas.fname} </td>
                <td className="border px-4 py-2">{datas.mname}</td>
                <td className="border px-4 py-2">{datas.email}</td>
                <td className="border px-4 py-2">{datas.phone_number}</td>
                <td className="border px-4 py-2">{datas.user_name}</td>
                <td className="border px-4 py-2">{datas.woreda_id}</td>
                <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                  <Link
                    to={`/zoneDashboard/manageworedaAdmin/update/${datas.id}`}
                  >
                      <BiEditAlt color="blue" size={32} />
                    
                  </Link>

                  <Link
                    to={`/zoneDashboard/manageWoredaAdmin/view/${datas.id}`}
                  >
                    <button>
                    <GrView color="white" size={32} />

                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(datas.id)}
                  >
                      <MdDelete color="red" size={30} />
                    
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

export default WoredaData;
