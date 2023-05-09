import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./farmer.css";

const SingleOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/order/${id}`).then((res) => {
      setOrderData(res.data);
    });
  }, [id]);

  return (
    <div>
      <div className="farmer">
        <h2>Detail information of your Order</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Woreda Name</th>
              <th>Cluster Name</th>
              <th>Input Type</th>
              <th>Amount</th>
              <th>Farmer Id</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.fname} </td>
                  <td>{data.mname}</td>
                  <td>{data.woreda_name}</td>
                  <td>{data.cluster_name}</td>
                  <td>{data.input_type}</td>
                  <td>{data.amount}</td>
                  <td>{data.farmer_id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleOrder;