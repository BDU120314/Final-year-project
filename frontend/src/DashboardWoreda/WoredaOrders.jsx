import axios from "axios";
import React, { useEffect, useState } from "react";

const WoredaOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(10);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/woreda/${user.rep_id}`
        );
        setAdmin(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAdmins();
  }, [user.rep_id]);

  useEffect(() => {
    if (admin.rows && admin.rows.length > 0) {
      const woreda_id = admin.rows[0].woreda_id;
      const fetchOrders = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/v1/order/woreda/${woreda_id}`
          );
          setOrderData(response.data);
          setTotalPages(Math.ceil(response.data.length / pageSize));
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchOrders();
    }
  }, [admin, pageSize]);

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

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedOrders = orderData.slice(startIndex, endIndex);

  return (
    <div className="pt-5">
    <div className="flex justify-center items-center px-5">
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
          {displayedOrders.map((order, index) => {
            return (
              <tr
                key={order.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="border px-4 py-2">{startIndex + index + 1}</td>
                <td className="border px-4 py-2">{order.farmer_id}</td>
                <td className="border px-4 py-2">{order.farmer_fname}</td>
                <td className="border px-4 py-2">{order.input_type}</td>
                <td className="border px-4 py-2">{order.amount}</td>
                <td className="border px-4 py-2">
                  {order.status === "Pending" ? (
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => handleApprove(order.id)}
                        className="bg-blue-400 text-white px-2 hover:bg-gray-500 rounded-sm"
                      >
                        approve
                      </button>
                      <button
                        onClick={() => handleReject(order.id)}
                        className="bg-red-400 h text-white px-2 hover:bg-gray-500 rounded-sm"
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
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 h-10 px-4 py-2 hover:bg-blue-300 rounded-r-[5px] text-white"
        >
          Previous
        </button>
        
        <span className="mx-4 text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 h-10 px-4 py-2 hover:bg-blue-300 rounded-r-[5px] text-white"
        >
          Next
        </button>
      </div>
    </div>
     
  );
};

export default WoredaOrders;
