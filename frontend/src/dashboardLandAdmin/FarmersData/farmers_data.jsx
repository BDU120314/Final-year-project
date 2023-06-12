import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { GrView } from "react-icons/gr";

const FarmersData = () => {
  const [accountData, setAccountData] = useState([]);
  const [formData, setFormData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  // for fetching admin details
  useEffect(() => {
    const reperesentative = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/kebele/${storedUser.rep_id}`
      );
      setAdmin(response.data);
    };

    reperesentative();
  }, [storedUser.rep_id]);

  useEffect(() => {
    const loadAccountData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/farmers/kebele/${admin[0].kebele_id}`
        );
        setAccountData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadAccountData();
  }, [admin]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/farmers/delete/${id}`)
      .then((response) => {
        setAccountData(accountData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = accountData.filter((data) => {
      const lowercasedFormData = formData.toLowerCase();
      const lowercasedFname = data.fname.toLowerCase();
      const lowercasedLname = data.mname.toLowerCase();
      const lowercasedEmail = data.email.toLowerCase();
      const lowercasedId = data.id.toString().toLowerCase();

      return (
        lowercasedFname.includes(lowercasedFormData) ||
        lowercasedLname.includes(lowercasedFormData) ||
        lowercasedEmail.includes(lowercasedFormData) ||
        lowercasedId.includes(lowercasedFormData)
      );
    });

    if (filteredData.length === 0) {
      toast.info("No results found");
    }
    setFilteredData(filteredData);
  };

  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.length > 0 ? filteredData.slice(startIndex, endIndex) : accountData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(accountData.length / itemsPerPage);

  return (
    <div className="pt-5">
      <div className="flex rounded-[5px] mx-14 my-10 gap-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            id="search"
            name="search"
            value={formData}
            onChange={(e) => {
              setFormData(e.target.value);
            }}
            type="text"
            className="bg-gray-100 w-[250px] outline-none border-2 border-gray-300 pl-3 lg:w-[350px] h-10 rounded-[5px] placeholder:text-[18px] leading-4 font-normal"
            placeholder="search here..."
          />
          <button
            type="submit"
            className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="flex justify-center flex-col items-center px-5 ">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((datas) => {
              return (
                <tr key={datas.id} className="bg-gray-100/{0-4}">
                  <td className="border px-4 py-2">{datas.id}</td>
                  <td className="border px-4 py-2">{datas.fname} </td>
                  <td className="border px-4 py-2">{datas.mname}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2 ">{datas.user_name}</td>

                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    <Link
                      to={`/landAdminDashboard/manageFarmers/update/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 rounded-sm hover:bg-gray-400">
                        <BiEditAlt color="blue" size={32} />
                      </button>
                    </Link>

                    <Link
                      to={`/landAdminDashboard/manageFarmers/view/${datas.id}`}
                      className="link"
                    >
                      <button className="px-2 rounded-sm hover:bg-gray-400">
                        <GrView color="white" size={32} />
                      </button>{" "}
                    </Link>

                    <button
                      onClick={() => handleDelete(datas.id)}
                      className="px-2 rounded-sm hover:bg-gray-400"
                    >
                      <MdDelete color="red" size={30} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={handleClickPrevious}
          disabled={currentPage === 1}
          className="bg-blue-500 h-10 px-4 py-2 hover:bg-blue-300 rounded-l-[5px] text-white"
        >
          Previous
        </button>
        <span className="mx-4 text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
          className="bg-blue-500 h-10 px-4 py-2 hover:bg-blue-300 rounded-r-[5px] text-white"
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FarmersData;
