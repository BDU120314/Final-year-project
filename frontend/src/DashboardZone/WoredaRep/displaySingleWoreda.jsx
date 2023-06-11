import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplaySingleWoreda = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(data)
  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/woreda/${id}`).then((res) => {
      setData(res.data.rows[0]);
    });
  });
  return (
    <div>
      <div className="flex justify-center flex-col items-center px-5">
        <h2 className="text-[18px] text-gray-700 py-[25px] font-bold leading-6">
          Detail Information of Representative
        </h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-300/50">
            <tr>
              <th className="px-4 py-2">Woreda name</th>
              <th className="px-4 py-2">First name</th>
              <th className="px-4 py-2">Middle name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone_number</th>
              <th className="px-4 py-2">User name</th>
              <th className="px-4 py-2">Id</th>
            </tr>
          </thead>
         <tbody className="bg-gray-50">
         
                <tr key={data.id}>
                  <td className="border px-4 py-2">{data.lname}</td>
                  <td className="border px-4 py-2">{data.fname}</td>
                  <td className="border px-4 py-2">{data.mname}</td>
                  <td className="border px-4 py-2">{data.email}</td>
                  <td className="border px-4 py-2">{data.phone_number}</td>
                  <td className="border px-4 py-2">{data.user_name}</td>
                  <td className="border px-4 py-2">{data.id}</td>
                </tr>
            
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySingleWoreda;
