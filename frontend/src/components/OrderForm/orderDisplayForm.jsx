import React, { useEffect, useState } from "react";
import axios from "axios";
import "./farmers_data.css";
import { Link } from "react-router-dom";
const OrderDisplayForm = () => {
  const [zoneData, setZoneData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/order/delete/${id}`)
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
      .get("http://localhost:5000/api/v1/order")
      .then((response) => {
        setZoneData(response.data);
        console.log(zoneData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zoneData]);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First NAme</th>
            <th>Middle Name</th>
            <th>Woreda Name</th>
            <th>Cluster Name</th>
            <th>Input Type</th>
            <th>Amount</th>
            <th>Farmer Id</th>
          </tr>
        </thead>
        <tbody>
          {zoneData.map((datas) => {
            return (
              <tr key={datas.id}>
                <td>{datas.id}</td>
                <td>{datas.fname} </td>
                <td>{datas.mname}</td>
                <td>{datas.woreda_name}</td>
                <td>{datas.cluster_name}</td>
                <td>{datas.input_type}</td>
                <td>{datas.amount}</td>
                <td>{datas.farmer_id}</td>
                <td>
                  <Link to={`/update/${datas.id}`} className="link">
                    <button className="btn edit">Edit</button>
                  </Link>

                  <Link to={`/view/${datas.id}`} className="link">
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

export default OrderDisplayForm;
