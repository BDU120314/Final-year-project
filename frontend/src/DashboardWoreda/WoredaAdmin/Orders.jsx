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
            <th className="py-2">Farmer Full Name</th>
            <th className="py-2">Input_type</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Kebele Id</th>
            <th className="py-2">Farmer ID</th>
            <th className="py-2">STATUS</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {orderData.map((order, index) => {
            return (
              <tr
                key={order.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="border px-20 py-2 ">{order.fname} {order.mname}
                </td>
                <td className="border px-20 py-2">{order.input_type}</td>
                <td className="border px-20 py-2">{order.amount}</td>
                <td className="border px-20 py-2">{order.kebele_id}</td>
                <td className="border px-20 py-2">{order.id}</td>
                <td className="border px-20 py-2">{order.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
