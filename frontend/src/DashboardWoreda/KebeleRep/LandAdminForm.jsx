import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";

const LandAdminForm1 = () => {
  const [admin, setAdmin] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [kebeleData, setKebeleData] = useState([]);

  useEffect(() => {
    const adminData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/woreda/${user.rep_id}`
      );
      setAdmin(response.data.rows[0]);
    };
    adminData();
  }, [user.rep_id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/kebele/delete/${id}`)
      .then((response) => {
        setKebeleData(kebeleData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/kebele/fetch/${admin.woreda_id}`)
      .then((response) => {
        console.log(response.data);
        setKebeleData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [admin]);

  return (
    <div className="flex justify-center flex-col items-center px-5 h-screen mt-0 fixed">
      <h1 className="text-[25px]">Land Admin Management Form</h1>
      <div className="overflow-y-auto  w-full h-screen">
        <table className="table-auto min-w-full h-screen">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Kebele</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {kebeleData.map((datas, index) => {
              return (
                <tr
                  key={datas.id}
                  className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                >
                  <td className="border px-4 py-2">{datas.id}</td>
                  <td className="border px-4 py-2">{datas.fname}</td>
                  <td className="border px-4 py-2">{datas.mname}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td>
                  <td className="border px-4 py-2">{datas.kebele_id}</td>
                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    <Link
                      to={`/woredaDashboard/manageland/update/${datas.id}`}
                      className="link hover:bg-gray-400 rounded-sm"
                    >
                      <BiEditAlt color="blue" size={32} />
                    </Link>

                    <Link
                      className="link"
                      to={`/woredaDashboard/manageland/view/${datas.id}`}
                    >
                      <button className="hover:bg-gray-400 rounded-sm">
                        <GrView color="white" size={32} />
                      </button>
                    </Link>

                    <button
                      className="hover:bg-gray-400 rounded-sm"
                      onClick={() => handleDelete(datas.id)}
                    >
                      <MdDelete color="red" size={30} />
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

export default LandAdminForm1;
