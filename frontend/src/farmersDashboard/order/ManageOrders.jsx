import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ManageOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 9;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user_id = storedUser.farmers_id;

  // For deleting an order by order id
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

  // For fetching farmer's orders by unique farmer id
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/order/farmer/${user_id}`)
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_id]);

  // Logic to calculate the current orders to display
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orderData.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < Math.ceil(orderData.length / ordersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-700 px-4">
      {orderData.length > 0 ? (
        <table className="table-auto w-[100%] px-20">
          <thead className="bg-gray-100 sticky top-[70px left-auto]">
            <tr>
              <th className="px-4 py-2">Input Type</th>
              <th className="px-4 py-2">Sub Type</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-1">{order.input_type}</td>
                <td className="border px-4 py-1">{order.subtype}</td>
                <td className="border px-4 py-1">{order.amount}</td>
                <td className="border px-4 py-1">
                  {order.status === "Completed" ? "ordered" : order.status}
                </td>
                <td className="border px-4 py-1 flex justify-center items-center gap-3">
                  <Link
                    to={`/farmerDashboard/manageAccount/order/update/${order.id}`}
                  >
                    <button className="px-2 rounded-sm hover:bg-gray-400">
                      <BiEditAlt color="blue" size={32} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="hover:bg-gray-400 px-2 rounded-sm"
                  >
                    <MdDelete color="red" size={30} />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-8">No orders found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 py-6">
        <button
          className="px-4 py-1 bg-blue-500 h-10 hover:bg-blue-300 rounded-md"
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        {orderData.length > 0 && (
          <div className="text-center">
            <span className="mx-4 text-lg font-semibold">
              Page {currentPage} of{" "}
              {Math.ceil(orderData.length / ordersPerPage)}
            </span>
          </div>
        )}
        <button
          className="bg-blue-500 h-10 px-4 py-1 hover:bg-blue-300 rounded-md"
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageOrders;
