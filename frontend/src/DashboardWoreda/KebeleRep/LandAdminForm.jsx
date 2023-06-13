import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";

const LandAdminForm1 = () => {
  const [admin, setAdmin] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState("");
  const [kebeleData, setKebeleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const adminData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/woreda/${user.rep_id}`
      );
      setAdmin(response.data.rows[0]);
    };
    adminData();
  }, [user.rep_id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/kebele/delete/${id}`)
      .then((response) => {
        setKebeleData(kebeleData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/kebele/fetch/${admin.woreda_id}`)
      .then((response) => {
        console.log(response.data);
        setKebeleData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [admin]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = kebeleData.filter((data) => {
      const lowercasedFormData = formData.toLowerCase();
      const lowercasedFname = data.fname.toLowerCase();
      const lowercasedLname = data.mname.toLowerCase();
      const lowercasedEmail = data.email.toLowerCase();
      const lowercasedId = data.id.toString().toLowerCase();
      const lowercasedPhone_number = data.phone_number.toString().toLowerCase();

      return (
        lowercasedFname.includes(lowercasedFormData) ||
        lowercasedLname.includes(lowercasedFormData) ||
        lowercasedEmail.includes(lowercasedFormData) ||
        lowercasedPhone_number.includes(lowercasedFormData) ||
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
  const currentData =
    filteredData.length > 0
      ? filteredData.slice(startIndex, endIndex)
      : kebeleData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(kebeleData.length / itemsPerPage);

  return (
    <div className="flex justify-start flex-col items-start px-1 h-screen mt-0">
      <div className="flex rounded-[5px] mx-1 my-10 gap-5">
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

      <div className="overflow-y-auto  w-full h-screen">
        <table className="table-auto min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Kebele ID</th>

              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((datas, index) => {
              return (
                <tr
                  key={datas.id}
                  className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
                >
                  <td className="border px-4 py-2">{datas.id}</td>
                  <td className="border px-4 py-2">{datas.fname}</td>
                  <td className="border px-4 py-2">{datas.mname}</td>
                  <td className="border px-4 py-2">{datas.email}</td>
                  <td className="border px-4 py-2">{datas.phone_number}</td>
                  <td className="border px-4 py-2">{datas.user_name}</td>
                  <td className="border px-4 py-2">{datas.kebele_id}</td>
                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    <Link
                      to={`/woredaDashboard/manageland/update/${datas.id}`}
                      className="link hover:bg-gray-400 rounded-sm px-2"
                    >
                      <BiEditAlt color="blue" size={32} />
                    </Link>

                    <Link
                      className="link"
                      to={`/woredaDashboard/manageland/view/${datas.id}`}
                    >
                      <button className="hover:bg-gray-400 rounded-sm px-2">
                        <GrView color="white" size={32} />
                      </button>
                    </Link>

                    <button
                      className="hover:bg-gray-400 rounded-sm px-2"
                      onClick={() => handleDelete(datas.id)}
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
    </div>
  );
};

export default LandAdminForm1;
