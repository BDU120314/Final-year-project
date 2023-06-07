import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WoredaOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [admin, setAdmin] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const role = user.role;

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/woreda/${user.rep_id}`
        );
        setAdmin(response.data);
        // console.log(response.data, "fetch woreda admin detail");
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAdmins();
  }, [user.rep_id]);
  console.log(admin);
  useEffect(() => {
    if (admin.rows && admin.rows.length > 0) {
      const woreda_id = admin.rows[0].woreda_id;
      const fetchOrders = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/v1/order/woreda/${woreda_id}`
          );
          setOrderData(response.data);
          console.log(response.data, "fetch woreda order specifc");
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchOrders();
    }
  }, [admin]);

  const handleApprove = async (orderId) => {
    try {
      await axios.put(`http://localhost:5001/api/v1/order/update/${orderId}`, {
        role: role,
        status: "Woreda Approval",
      });

      setOrderData((prevOrderData) => {
        return prevOrderData.map((order) => {
          if (order.id === orderId) {
            return { ...order, status: "approved" };
          }
          return order;
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReject = async (orderId) => {
    try {
      await axios.put(`http://localhost:5001/api/v1/order/update/${orderId}`, {
        role: role,
        status: "Rejected",
      });

      setOrderData((prevOrderData) => {
        return prevOrderData.map((order) => {
          if (order.id === orderId) {
            return { ...order, status: "rejected" };
          }
          return order;
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center px-5 ">
      <table className="table-auto w-full">
        <thead className="bg-gray-200/50">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Farmer_ID</th>
            <th className="px-4 py-2">F_Name</th>
            <th className="px-4 py-2">Input_type</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Status</th>
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
                <td className="border px-4 py-2">{order.farmer_id}</td>
                <td className="border px-4 py-2">{order.farmer_fname}</td>
                <td className="border px-4 py-2">{order.input_type}</td>
                <td className="border px-4 py-2">{order.amount}</td>
                <td className="border px-4 py-2">
                  {order.status === "Pending" ? (
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="bg-blue-400 text-white px-2"
                      >
                        approve
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="bg-red-400 text-white px-2"
                      >
                        reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-green-400">{order.status}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WoredaOrders;