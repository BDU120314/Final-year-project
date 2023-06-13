import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
const ZoneData = () => {
  const [zoneData, setZoneData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 7;
    const [formData, setFormData] = useState("");
    const [filteredData, setFilteredData] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/v1/zone/delete/${id}`)
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
      .get("http://localhost:5001/api/v1/zone")
      .then((response) => {
        setZoneData(response.data);
        console.log(zoneData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [zoneData]);

  
     const handleSubmit = (e) => {
       e.preventDefault();

       const filteredData = zoneData.filter((data) => {
         const lowercasedFormData = formData.toLowerCase();
         const lowercasedFname = data.fname.toLowerCase();
         const lowercasedLname = data.mname.toLowerCase();
         const lowercasedEmail = data.email.toLowerCase();
         const lowercasedId = data.id.toString().toLowerCase();
         const lowercasedPhone_number = data.phone_number
           .toString()
           .toLowerCase();

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
         : zoneData.slice(startIndex, endIndex);

     const totalPages = Math.ceil(zoneData.length / itemsPerPage);


  return (
    <div className="flex justify-start flex-col items-start px-5">
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
      {/* <h2 className="flex items-center justify-center  text-[25px] ">
        {" "}
        Zone Representative Modification Form
      </h2> */}
      <div className="flex  justify-center   items-center ">
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Email Address</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Zone ID</th>
              <th className="px-4 py-2 w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((datas, index) => {
              return (
                <tr
                  key={datas.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
                >
                  <td className="px-4 py-2">{datas.id}</td>
                  <td className="px-4 py-2">{datas.fname} </td>
                  <td className="px-4 py-2">{datas.mname}</td>
                  <td className="px-4 py-2">{datas.email}</td>
                  <td className="px-4 py-2">{datas.phone_number}</td>
                  <td className="px-4 py-2">{datas.user_name}</td>
                  <td className="px-4 py-2">{datas.zone_id}</td>
                  <td className="w-auto flex justify-center items-center gap-2 py-2 px-4">
                    <Link
                      to={`/regionDashboard/manageZoneAdmin/update/${datas.id}`}
                      className="link  hover:bg-blue-400"
                    >
                      <BiEditAlt color="blue" size={32} />
                    </Link>

                    <Link
                      to={`/regionDashboard/manageZoneAdmin/view/${datas.id}`}
                    >
                      <button className="hover:bg-yellow-300">
                        <GrView color="white" size={32} />
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(datas.id)}
                      className=" hover:bg-red-400"
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

export default ZoneData;
