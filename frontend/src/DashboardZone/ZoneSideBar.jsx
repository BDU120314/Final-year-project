import React, { useEffect, useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { FaTachometerAlt, FaRegEdit, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const ZoneSideBar = () => {
  const [admin, setAdmin] = useState([]);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const [openLink, setOpenLink] = useState("");
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const id = user.rep_id;

  //fetch zone admin details
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/zone/${id}`
        );
        setAdmin(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdminDetails();
  }, [id]);

  useEffect(() => {
    if (admin && admin.length > 0) {
      const zone_id = admin[0].zone_id;

      const fetchPendingOrderCount = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/v1/order/countZone/${zone_id}`
          );
          setPendingOrderCount(response.data.count);
        } catch (error) {
          console.log(error);
        }
      };

      fetchPendingOrderCount();
    }
  }, [admin]);

  const handleLinkClick = (link) => {
    setOpenLink((prevLink) => (prevLink === link ? "" : link));
  };

  const handleLinkItemClick = () => {
    setOpenLink("");
  };

  return (
    <>
      {isLogin && (
        <div className="bg-green-400 h-screen w-[17%] flex justify-top items-start gap-5 flex-col fixed top-0 left-0">
          <div className="flex gap-[15px] items-center pb-5 border-b-[1px] border-[#EDEDED]/[0.3]">
            <FaTachometerAlt className="text-white" fontSize={32} />
            <p className="text-white text-[18px] font-bold leading-5">
              Zone Admin
            </p>
          </div>
          <div className="pt-5 border-b-[1px] border-[#EDEDED]/[0.3] flex flex-col justify-start items-start gap-6">
            <div
              className={`flex cursor-pointer items-center hover:bg-green-300 pl-[15px] pr-[45px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                openLink === "landAdmin" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("landAdmin")}
            >
              <div className="flex items-center gap-2">
                <GrUserAdmin color="white" fontSize={32} />
                <span className="text-[16px] font-bold">Woreda</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={
                    openLink === "landAdmin" ? "transform rotate-90" : ""
                  }
                />
              </span>
            </div>
            {openLink === "landAdmin" && (
              <nav
                aria-label="Farmers Nav"
                className="mt-2 gap-4 items-center flex flex-col"
              >
                <Link
                  to="/zoneDashboard/register"
                  className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Register Admin</span>
                </Link>
                <Link
                  to="/zoneDashboard/manageland"
                  className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Admin</span>
                </Link>
              </nav>
            )}
            <div
              className={`flex cursor-pointer items-center hover:bg-green-300 pr-[20px] pl-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                openLink === "orders" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("orders")}
            >
              <Link to="/zoneDashboard/orders">
                <div className="flex items-center gap-2">
                  <GrUserAdmin color="white" fontSize={32} />
                  <span className="text-[16px] font-bold">Orders</span>
                </div>
              </Link>
              <div className="bg-blue-500 text-white rounded-full w-12 justify-center items-center flex h-6">
                <span>{pendingOrderCount}</span>
              </div>
            </div>
            <div
              className={`flex cursor-pointer items-center justify-between gap-10 py-1 hover:bg-green-300 pl-[15px] pr-[35px] hover:rounded-md text-white ${
                openLink === "reports" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("reports")}
            >
              <div className="flex items-center gap-2">
                <FaRegEdit color="gray-400" fontSize={32} />
                <span className="text-[18px] font-bold">Reports</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={
                    openLink === "reports" ? "transform rotate-90" : ""
                  }
                />
              </span>
            </div>
            {openLink === "reports" && (
              <nav
                aria-label="Reports Nav"
                className="mt-2 flex flex-col gap-4"
              >
                <Link
                  to="/zoneDashboard/create"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Add Report</span>
                </Link>
                <Link
                  to="/zoneDashboard/manageReport"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Report</span>
                </Link>
              </nav>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ZoneSideBar;
