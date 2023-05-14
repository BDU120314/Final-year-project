import React, { useEffect, useState } from "react";
import axios from "axios";
import "./farmers_data.css";
import { Link } from "react-router-dom";
const FarmersData = () => {
  const [farmersData, setFarmersData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/farmers/delete/${id}`)
      .then((response) => {
        setFarmersData(farmersData.filter((item) => item.id !== id));
        console.log(`deleted user id :${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/farmers")
      .then((response) => {
        setFarmersData(response.data);
        console.log(farmersData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [farmersData]);

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {farmersData.map((datas) => {
            return (
              <tr key={datas.id}>
                <td>{datas.id}</td>
                <td>{datas.fname} </td>
                <td>{datas.mname}</td>
                <td>{datas.email}</td>
                <td>{datas.phone_number}</td>
                <td>{datas.user_name}</td>

                <td>
 
                  <Link to={`landadmin_dashboard/manage_farmers/update/${datas.id}`} className="link">
                    <button className="btn edit">Edit</button>
                  </Link>

                  <Link to={`landadmin_dashboard/manage_farmers/view/${datas.id}`} className="link">
                    <button className="btn view">View</button>{" "}
                  </Link>
 
                  <button
                    className="btn delete"
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

export default FarmersData;
