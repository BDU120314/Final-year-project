import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ManageAccount = () => {
  const [orderData, setOrderData] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const user_id = user.farmers_id;

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/order/delete/${id}`)
      .then((response) => {
        setOrderData(orderData.filter((item) => item.id !== id));
        console.log(`Deleted order with id: ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/order/farmer/${user_id}`)
      .then((response) => {
        setOrderData(response.data);
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
            <th className="px-4 py-2">Input Type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.input_type}</td>
              <td className="border px-4 py-2">{order.amount}</td>
              <td className="border px-4 py-2 flex justify-center items-center gap-10">
                <Link
                  to={`/farmerorderdisplay/update/${order.id}`}
                  className="px-2 bg-blue-700 rounded-sm"
                >
                  <button className="btn edit">Edit</button>
                </Link>
                <Link
                  to={`/view/${order.id}`}
                  className="px-2 bg-gray-300 rounded-sm"
                >
                  <button className="btn view">View</button>
                </Link>
                <button
                  className="bg-red-400"
                  onClick={() => handleDelete(order.id)}
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

export default ManageAccount;
