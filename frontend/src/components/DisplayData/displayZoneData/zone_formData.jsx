import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ZoneData = () => {
  const [zoneData, setZoneData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/zone/delete/${id}`)
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
      .get("http://localhost:5000/api/v1/zone")
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
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>User Name</th>
            <th>Zone Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {zoneData.map((datas, index) => {
            return (
              <tr
                key={datas.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td>{datas.id}</td>
                <td>{datas.rep_fname} </td>
                <td>{datas.rep_mname}</td>
                <td>{datas.email}</td>
                <td>{datas.rep_phone_number}</td>
                <td>{datas.rep_user_name}</td>
                <td>{datas.zone_name}</td>

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

export default ZoneData;
