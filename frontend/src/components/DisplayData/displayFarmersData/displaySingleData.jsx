import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DisplaySingleDistributor = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/farmers/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, [id]);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleEdit = (id) => {
    navigate(`/landadmin_dashboard/manage_farmers/update/${id}`); // Replace with your desired edit page URL
  };

  return (
    <div className="">
      <div className="flex justify-center flex-col items-center mx-0 ">
        <h2 className="text-[18px] text-gray-700 py-[25px] font-bold leading-6">
          Detail information of farmers
        </h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-300/50">
            <tr>
              <th className="px-4 py-2">First name</th>
              <th className="px-4 py-2">Middle name</th>
              <th className="px-4 py-2">Last name</th>
              <th className="px-4 py-2">Birth_date</th>
              <th className="px-4 py-2">gender</th>
              <th className="px-4 py-2">Land amount</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone_number</th>
              <th className="px-4 py-2">User name</th>
              <th className="px-4 py-2">password</th>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Actions</th> {/* New column for Edit button */}
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {data.map((datas, index) => {
              return (
                <tr
                  key={datas.id}
                  className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                >
                  <td className="border px-4 py-2">{datas.fname}</td>
                  <td className="border px-4 py-2">{datas.mname}</td>
                  <td className="border px-4 py-2">{datas.lname}</td>
                  <td className="border px-4 py-2">
                    {formatDate(datas.birth_date)}
                  </td>
                  <td className="border px-4 py-2">{datas.gender}</td>
                  <td className="border px-4 py-2">{datas.land_by_ha}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td>
                  <td className="border px-4 py-2">{datas.password}</td>
                  <td className="border px-4 py-2">{datas.kebele_id}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(datas.id)}
                      className="text-blue-500 hover:text-blue-700 underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplaySingleDistributor;
