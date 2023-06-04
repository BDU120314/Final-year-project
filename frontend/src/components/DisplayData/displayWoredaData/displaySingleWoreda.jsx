import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplaySingleWoredarep = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/woreda/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex justify-center items-center px-5">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl text-gray-700 py-6 font-bold leading-6 text-center">
          Detail information of woreda
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-300">
            <thead>
              <tr>
                <th className="py-2">Id</th>
                <th className="py-2">First name</th>
                <th className="py-2">Lastname</th>
                <th className="py-2">Middle name</th>
                <th className="py-2">Gender</th>
                <th className="py-2">Email</th>
                <th className="py-2">Phone number</th>
                <th className="py-2">User name</th>
                <th className="py-2">Password</th>
                <th className="py-2">Zone Id</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datas) => {
                return (
                  <tr key={datas.id}>
                    <td className="border py-2">{datas.id}</td>
                    <td className="border py-2">{datas.fname}</td>
                    <td className="border py-2">{datas.mname}</td>
                    <td className="border py-2">{datas.lname}</td>
                    <td className="border py-2">{datas.gender}</td>
                    <td className="border py-2">{datas.email}</td>
                    <td className="border py-2">{datas.phone_number}</td>
                    <td className="border py-2">{datas.user_name}</td>
                    <td className="border py-2">{datas.password}</td>
                    <td className="border py-2">{datas.zone_id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplaySingleWoredarep;
