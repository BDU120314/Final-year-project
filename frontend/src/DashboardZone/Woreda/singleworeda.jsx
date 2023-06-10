import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplaySingleWoreda = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/addworeda/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  });
  return (
    <div>
      <div className="flex justify-center flex-col items-center px-5">
        <h2 className="text-[18px] text-gray-700 py-[25px] font-bold leading-6">
          Detail information of woreda
        </h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-300/50">
          <tr>
              <th className="px-4 py-2">Woreda Name</th>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Representative full name</th>
              <th className="px-4 py-2">Gende</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone_number</th>
              <th className="px-4 py-2">User name</th>  
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {data.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td className="border px-4 py-2">{datas.name}</td>
                  <td className="border px-4 py-2">{datas.id}</td>
                  <td className="border px-4 py-2">{datas.fname} {datas.mname} {datas.lname}</td>
                  {/* <td className="border px-4 py-2">{datas.mname}</td>
                  <td className="border px-4 py-2">{datas.lname}</td> */}
                  <td className="border px-4 py-2">{datas.gender}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySingleWoreda;
