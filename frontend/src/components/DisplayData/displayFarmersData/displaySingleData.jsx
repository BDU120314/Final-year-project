import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./farmer.css";
const DisplaySingleData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/farmers/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  });

  return (
    <div>
      <div className="farmer">
        <h2>Detail information of farmers</h2>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Middle name</th>
              <th>Last name</th>
              <th>Birth_date</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone_number</th>
              <th>Land amount</th>
              <th>User name</th>
              <th>password</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td>{datas.fname}</td>
                  <td>{datas.mname}</td>
                  <td>{datas.lname}</td>
                  <td>{datas.birth_date}</td>
                  <td>{datas.email}</td>
                  <td>{datas.address}</td>
                  <td>{datas.phone_number}</td>
                  <td>{datas.land_amount}</td>
                  <td>{datas.user_name}</td>
                  <td>{datas.password}</td>
                  <td>{datas.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySingleData;
