import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <div className="flex justify-center flex-col items-center px-5">
        <h2 className="text-[18px] text-gray-700 py-[25px] font-bold leading-6">
          Detail information of Land Admin
        </h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-300/50">
            <tr>
              <th className="px-4 py-2">Kebele name</th>
              <th className="px-4 py-2">First name</th>
              <th className="px-4 py-2">Middle name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone_number</th>
              <th className="px-4 py-2">User name</th>
              <th className="px-4 py-2">password</th>
              <th className="px-4 py-2">Id</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {data.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td className="border px-4 py-2">{datas.kebele_name}</td>
                  <td className="border px-4 py-2">{datas.rep_fname}</td>
                  <td className="border px-4 py-2">{datas.rep_mname}</td>
                  <td className="border px-4 py-2">{datas.rep_lname}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.rep_phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td>
                  <td className="border px-4 py-2">{datas.password}</td>
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
