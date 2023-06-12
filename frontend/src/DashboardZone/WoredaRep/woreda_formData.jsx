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
        console.log(`deleted user id: ${id}`);
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
    <div className="flex justify-center flex-col items-center px-5 mt-0 fixed">
      <h1 className="text-2xl font-bold my-4">Representative Management Form</h1>
      <div className="ml-[37%] h-96 overflow-y-auto w-[130%]">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>User Name</th>
              <th>Woreda ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {woredaData.map((datas) => (
              <tr key={datas.id}>
                <td>{datas.id}</td>
                <td>{datas.fname}</td>
                <td>{datas.mname}</td>
                <td>{datas.email}</td>
                <td>{datas.phone_number}</td>
                <td>{datas.user_name}</td>
                <td>{datas.woreda_id}</td>
                <td className="flex items-center justify-center py-3">
                  <Link to={`/zoneDashboard/manageworedaAdmin/update/${datas.id}`}>
                    <BiEditAlt className=" text-blue-600 hover:bg-gray-400 rounded-sm px-2" size={40} />
                  </Link>
                  <Link to={`/zoneDashboard/manageWoredaAdmin/view/${datas.id}`}>
                    <GrView className=" text-white hover:bg-gray-400 rounded-sm px-2" size={40} />
                  </Link>
                  <button onClick={() => handleDelete(datas.id)}>
                    <MdDelete className=" text-red-600 hover:bg-gray-400  rounded-sm px-2" size={40} />
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
