import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageReportZone = () => {
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
    <div className="flex justify-center items-center bg-gray-50 text-gray-700 px-5">
      <table className="table-auto w-[100%] px-20">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">title</th>
            <th className="px-4 py-2">content</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.id}>
              <td className="breport px-4 py-2">{report.title}</td>
              <td className="breport px-4 py-2">{report.content}</td>
              <th className="px-4 py-2">{report.updateAt}</th>
              <td className="breport px-4 py-2 flex justify-center items-center gap-10">
                <Link
                  to={`/regionDashboard/manageReport/update/${report.id}`}
                  className="px-2 bg-blue-700 rounded-sm"
                >
                  <button className="btn edit">Edit</button>
                </Link>
                <Link
                  to={`/regionDashboard/manageReport/view/${report.id}`}
                  className="px-2 bg-gray-300 rounded-sm"
                >
                  <button className="btn view">View</button>
                </Link>
                <button
                  className="bg-red-400"
                  onClick={() => handleDelete(report.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageReportZone;
