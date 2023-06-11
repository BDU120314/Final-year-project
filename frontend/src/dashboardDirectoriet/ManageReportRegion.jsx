import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";

const ManageReportRegion = () => {
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
        const formattedData = response.data.map((report) => ({
          ...report,
          updatedAt: moment(report.updatedAt).format("YYYY-MM-DD"),
        }));
        setReportData(formattedData);
        console.log(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_id]);

  return (
    <div className="flex justify-center items-center bg-gray-50 text-gray-700 px-5">
      <table className="table-auto w-[100%]">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-2 py-2">title</th>
            <th className="px-2 py-2">content</th>
            <th className="px-2 py-2">Date</th>
            <th className="px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr className="ml-96" key={report.id}>
              <td className="breport px-4 py-2">{report.title}</td>
              <td className="breport px-4 py-2">{report.content}</td>
              <th className="px-4 py-2">{report.updatedAt}</th>
              <td className="breport px-4 py-2 flex justify-center items-center gap-10">
                <Link
                  to={`/regionDashboard/manageReport/update/${report.id}`}
                  className="hover:bg-blue-400 "
                >
                  <BiEditAlt color="blue" size={32} />
                </Link>
                <Link
                  to={`/regionDashboard/manageReport/view/${report.id}`}
                  className="hover:bg-yellow-300"
                >
                  <GrView color="white" size={32} />
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
  );
};

export default ManageReportRegion;