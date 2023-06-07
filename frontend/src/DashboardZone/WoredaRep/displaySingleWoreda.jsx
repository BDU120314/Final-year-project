import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplaySingleWoreda = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/woreda/${id}`).then((res) => {
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
              <th className="px-4 py-2">Woreda name</th>
              <th className="px-4 py-2">Rep_First name</th>
              <th className="px-4 py-2">Rep_Middle name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Rep_Phone_number</th>
              <th className="px-4 py-2">Rep_User name</th>
              <th className="px-4 py-2">Rep_password</th>
              <th className="px-4 py-2">Id</th>
            </tr>
          </thead>
         <tbody className="bg-gray-50">
            {data.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td className="border px-4 py-2">{datas.rep_lname}</td>
                  <td className="border px-4 py-2">{datas.rep_fname}</td>
                  <td className="border px-4 py-2">{datas.rep_mname}</td>
                  <td className="border px-4 py-2">{datas.rep_email}</td>
                  <td className="border px-4 py-2">{datas.rep_phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td>
                  <td className="border px-4 py-2">{datas.password}</td>
                  <td className="border px-4 py-2">{datas.id}</td>
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
