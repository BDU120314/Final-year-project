import React, { useEffect, useState } from "react";
import axios from "axios";
import "./farmers_data.css";
import { Link } from "react-router-dom";
const FarmersData = () => {
  const [farmersData, setFarmersData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/farmers/delete/${id}`)
      .then((response) => {
        setFarmersData(farmersData.filter((item) => item.id !== id));
        console.log(`deleted user id :${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:5000/api/v1/farmers/update/${id}`)
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
      .get("http://localhost:5000/api/v1/farmers")
      .then((response) => {
        setFarmersData(response.data);
        console.log(farmersData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [farmersData]);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>First NAme</th>
            <th>Middle Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>User Name</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {farmersData.map((datas) => {
            return (
              <tr key={datas.id}>
                <td>{datas.fname} </td>
                <td>{datas.mname}</td>
                <td>{datas.email}</td>
                <td>{datas.phone_number}</td>
                <td>{datas.user_name}</td>
                <td>{datas.id}</td>
                <td>
                  <Link to={`/update/ ${datas.id}`} className="btn edit">Edit</Link>
                  <button className="btn view">View</button>
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
