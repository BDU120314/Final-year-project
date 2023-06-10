import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ManageOrders = () => {
  const [orderData, setOrderData] = useState([]);
 const storedUser = JSON.parse(localStorage.getItem("user"));
  const user_id = storedUser.farmers_id;
//for deleting order by order id 
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/order/delete/${id}`)
      .then((response) => {
        setOrderData(orderData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //for fetching farmers order by unique farmer id
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/order/farmer/${user_id}`)
      .then((response) => {
        setOrderData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_id]);

  return (
    <div className="flex justify-center items-center bg-gray-50 text-gray-700 px-4">
      <table className="table-auto w-[100%] px-20">
        <thead className="bg-gray-100 sticky top-[70px left-auto]">
          <tr>
            <th className="px-4 py-2">Input Type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {orderData.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.input_type}</td>
              <td className="border px-4 py-2">{order.amount}</td>
              <td className="border px-4 py-2">
                {order.status === "Completed" ? "orderd" : order.status}
              </td>
              <td className="border px-4 py-2 flex justify-center items-center gap-3 ">
                <Link
                  to={`/farmerDashboard/manageAccount/order/update/${order.id}`}
                >
                  {order.status !== "Completed" ? (
                    <BiEditAlt color="blue" size={32} />
                  ) : (
                    ""
                  )}
                </Link>
                  <button onClick={() => handleDelete(order.id)}>
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

export default ManageOrders;
