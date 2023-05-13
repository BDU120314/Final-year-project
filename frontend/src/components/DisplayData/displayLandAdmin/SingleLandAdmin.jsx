import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
 import '../css/farmer.css'
const SingleLandAdmin = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/kebele/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  });
  return (
    <div>
      <div className="farmer">
        <h2>Detail information of Land Admin</h2>
        <table>
          <thead>
            <tr>
              <th>Kebele name</th>
              <th>Rep_First name</th>
              <th>Rep_Middle name</th>
              <th>Email</th>
              <th>Rep_Phone_number</th>
              <th>Rep_User name</th>
              <th>Rep_password</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td>{datas.kebele_name}</td>
                  <td>{datas.rep_fname}</td>
                  <td>{datas.rep_mname}</td>
                  <td>{datas.rep_lname}</td>
                   <td>{datas.email}</td>
                   <td>{datas.rep_phone_number}</td>
                   <td>{datas.rep_user_name}</td>
                  <td>{datas.rep_password}</td>
                 </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleLandAdmin;
