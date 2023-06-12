import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";

const LandAdminManageAccount = () => {
  const [reportData, setReportData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.rep_id;

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/report/delete/${id}`)
      .then((response) => {
        setReportData(reportData.filter((item) => item.id !== id));
        console.log(`Deleted report with id: ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/report/landAdmin/${user_id}`)
      .then((response) => {
        setReportData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_id]);

  return (
    <div className="mt-16 p-4">
      <h1 className="text-center text-[25px]">Report Management</h1>
      <div className="flex justify-center items-center bg-gray-50 text-gray-700 px-5">
        <div className="max-h-80 ">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Content</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((report) => (
                <tr key={report.id}>
                  <td className="px-4 py-2">{report.title}</td>
                  <td className="px-4 py-2">{report.content}</td>
                  <td className="px-4 py-2">
                    {new Date(report.updateAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-2 flex justify-center items-center space-x-2">
                    <Link
                      to={`/farmerreportdisplay/update/${report.id}`}
                      className="px-2 rounded-sm hover:bg-blue-400"
                    >
                      <button>
                      <BiEditAlt color="blue" size={25} />
                  
                      </button>
                    </Link>
                    <Link
                      to={`/view/${report.id}`}
                      className=" hover:bg-gray-300 px-2 rounded-sm"
                    >
                      <button>
                      <GrView color="white" size={25} /> 
                      </button>
                    </Link>
                    <button
                      className="hover:bg-red-400 "
                      onClick={() => handleDelete(report.id)}
                    >
                  <MdDelete color="red" size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandAdminManageAccount;
