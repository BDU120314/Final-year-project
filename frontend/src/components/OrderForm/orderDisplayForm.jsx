import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const OrderDisplayForm = () => {
  const [zoneData, setZoneData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/order/delete/${id}`)
      .then((response) => {
        setZoneData(zoneData.filter((item) => item.id !== id));
        console.log(`deleted user id :${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/order")
      .then((response) => {
        setZoneData(response.data);
        console.log(zoneData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zoneData]);

  return (
    <div className="flex justify-center items-center px-5 ">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr> 
            <th className="px-4 py-2">Input Type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Farmer Id</th>
          </tr>
        </thead>
        <tbody>
          {zoneData.map((datas) => {
            return (
              <tr key={datas.id}> 
                <td className="border px-4 py-2">{datas.input_type}</td>
                <td className="border px-4 py-2">{datas.amount}</td>
                <td className="border px-4 py-2">{datas.farmer_id}</td>
                <td className="w-auto-2 flex justify-center items-center gap-2 py-2 px-4">
                  <Link
                    to={`/farmerorderdisplay/update/${datas.id}`}
                    className="px-2 bg-blue-700 rounded-sm"
                  >
                    <button className="btn edit">Edit</button>
                  </Link>

                  <Link
                    to={`/view/${datas.id}`}
                    className="px-2 bg-blgray-300 rounded-sm"
                  >
                    <button className="btn view">View</button>{" "}
                  </Link>
                  <button
                    className="bg-red-400"
                    onClick={() => handleDelete(datas.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    
  );
};

export default OrderDisplayForm;
