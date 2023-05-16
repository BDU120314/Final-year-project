import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  const getALLOrder = async () => {
    await axios
      .get("http://localhost:5001/api/v1/order")
      .then((response) => {
        setOrderData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getALLOrder();
  }, []);

  return (
    <div className="flex justify-center items-center px-5 ">
      <table className="table-auto w-full">
        <thead className="bg-gray-200/50">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Farmer_ID</th>
            <th className="px-4 py-2">F_Name</th>
            <th className="px-4 py-2">Cluster_Name</th>
            <th className="px-4 py-2">Input_type</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {orderData.map((order, index) => {
            return (
              <tr
                key={order.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{order.farmers_id}</td>
                <td className="border px-4 py-2">{order.fname}</td>
                <td className="border px-4 py-2">{order.cluster_name}</td>
                <td className="border px-4 py-2">{order.input_type}</td>
                <td className="border px-4 py-2">{order.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
