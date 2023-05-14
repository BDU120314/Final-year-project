import React, { useEffect, useState } from "react";
import axios from "axios";
import "../displayFarmersData/farmers_data.css";
import { Link } from "react-router-dom";
const WoredaData = () => {
  const [woredaData, setWoredData] = useState([]);

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
      .get("http://localhost:5001/api/v1/woreda")
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
            <th>ID</th>
            <th>First NAme</th>
            <th>Middle Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>User Name</th>
            <th>Woreda Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {woredaData.map((datas) => {
            return (
              <tr key={datas.id}>
                <td>{datas.id}</td>
                <td>{datas.rep_fname} </td>
                <td>{datas.rep_mname}</td>
                <td>{datas.email}</td>
                <td>{datas.rep_phone_number}</td>
                <td>{datas.user_name}</td>
                <td>{datas.woreda_name}</td>


                <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                  <Link to={`/zone_dashboard/manageland/update/${datas.id}`} className="link">
                    <button className="bg-blue-700 h-8 w-16">Edit</button>
                  </Link>

                  <Link to={`/zone_dashboard/manageland/view/${datas.id}`} className="link">
                    <button className="h-8 bg-white text-black w-16">View</button>{" "}
                  </Link>
                  <button
                    className="bg-red-400 h-8"
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

export default WoredaData;
