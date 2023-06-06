import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandAdminForm1 from "./components/DisplayData/displayLandAdmin/LandAdminForm";
import UpdateLandAdmin from "./components/DisplayData/displayLandAdmin/UpdateLandAdmin";
import SingleLandAdmin from "./components/DisplayData/displayLandAdmin/SingleLandAdmin";
import AdminRegistrationForm from "./components/registrationForm/admin_form/admin_form";
import WoredaData from "./components/DisplayData/displayWoredaData/woreda_formData";
import WoredaUpdate from "./components/DisplayData/displayWoredaData/updateWoreda";
import ZoneData from "./components/DisplayData/displayZoneData/zone_formData";
import ZoneUpdate from "./components/DisplayData/displayZoneData/updateZone";
import DisplaySingleZone from "./components/DisplayData/displayZoneData/displaySingleZone";
import ZoneRegistrationForm from "./components/registrationForm/zone_form/zone_form";
import DistributorForm from "./components/DisplayData/displayDistributer/distributor_form";
import DistributorUpdate from "./components/DisplayData/displayDistributer/distributorUpdate";
import DisplaySingleDistributor from "./components/DisplayData/displayFarmersData/displaySingleData";
import DistributorRegistrationForm from "./components/registrationForm/distributor_form/distributor_form";
import DashLandAdmin from "./dashboardLandAdmin/DashLandAdmin";
import FarmersData from "./components/DisplayData/displayFarmersData/farmers_data";
import FarmerUpdate from "./components/DisplayData/displayFarmersData/farmerUpdate";
import FarmerRegistrationForm from "./components/registrationForm/farmers_form/FarmersForm";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DisplaySingleData from "./components/DisplayData/displayFarmersData/displaySingleData";
import OrderForm from "./components/OrderForm/orderForm";
import Main from "./components/HomePart/Main";
import FarmerDashboard from "./pages/FarmerDashboard";
import ManageAccount from "./components/farmer/ManageAccount";
import ReportEditor from "./components/editor/ReportEditor";
import PestiSide from "./components/pestiside/PestiSide";
import Post from "./components/posts/Post";
import LandAdminManageAccount from "./components/landAdmin/LandAdminManageAccount";
import WoredaDashboard from "./DashboardWoreda/WoredaDashboard";
import ManageReportWoredaAdmin from "./DashboardWoreda/WoredaAdmin/ManageReportWoredaAdmin";
import ZoneDashboard from "./DashboardZone/ZoneDashboard";
import ManageReportZone from "./DashboardZone/ManageReportZone";
import ZoneOrders from "./DashboardZone/ZoneOrders";
import WoredaOrders from "./DashboardWoreda/WoredaAdmin/WoredaOrders";
import RegionDashboard from "./dashboardDirectoriet/RegionDashboard";
import RegionOrders from "./dashboardDirectoriet/RegionOrders";

const App = () => {
  // const [kebeleData, setKebeleData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);

  //  useEffect(() => {
  //    axios
  //      .get("http://localhost:5001/api/v1/kebele")
  //      .then((response) => {
  //        setKebeleData(response.data);
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  }, [kebeleData]);

  //  const handleSearch = (searchQuery) => {
  //    if (searchQuery === "") {
  //      setFilteredData([]);
  //    } else {
  //      const filteredData = kebeleData.filter((admin) => {
  //        // Modify the following conditions based on your data structure and desired properties
  //        return (
  //          admin.rep_fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //          admin.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //          admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //          admin.id.toString().includes(searchQuery) // Example: filtering based on an age property
  //        );
  //      });
  //      setFilteredData(filteredData);
  //    }
  //  };

  return (
    <div>
      <Routes>
        {/* home page or landing page */}

        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/postPage" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/pestiSide" element={<PestiSide />} />
        </Route>

        {/* farmer dashboard route */}

        <Route path="/farmerDashboard" element={<FarmerDashboard />}>
          <Route path="/farmerDashboard/order" element={<OrderForm />} />
          <Route
            path="/farmerDashboard/manageAccount"
            element={<ManageAccount />}
          />
        </Route>

        {/* land admin dashboard route */}

        <Route path="/landAdminDashboard" element={<DashLandAdmin />}>
          <Route
            index
            // path="/landAdminDashboard/manageFarmers"
            element={<FarmersData />}
          />
          <Route
            path={"/landAdminDashboard/manageFarmers/update/:id"}
            element={<FarmerUpdate />}
          />
          <Route
            path="/landAdminDashboard/manageFarmers/view/:id"
            element={<DisplaySingleData />}
          />

          <Route
            path="/landAdminDashboard/register"
            element={<FarmerRegistrationForm />}
          />
          <Route
            path="/landAdminDashboard/manageFarmers"
            element={<FarmersData />}
          />
          <Route path="/landAdminDashboard/create" element={<ReportEditor />} />
          <Route
            path="/landAdminDashboard/manageReport"
            element={<LandAdminManageAccount />}
          />
        </Route>

        {/* woreda Admin Dashboard */}

        <Route path="/woredaDashboard" element={<WoredaDashboard />}>
          <Route index element={<WoredaOrders />} />
          <Route
            path="/woredaDashboard/manageland"
            element={<LandAdminForm1 />}
          ></Route>
          <Route
            path={"/woredaDashboard/manageland/update/:id"}
            element={<UpdateLandAdmin />}
          />
          <Route
            path="/woredaDashboard/manageland/view/:id"
            element={<SingleLandAdmin />}
          />
          <Route
            path="/woredaDashboard/register"
            element={<AdminRegistrationForm />}
          />
          <Route path="/woredaDashboard/orders" element={<WoredaOrders />} />
          <Route path="/woredaDashboard/create" element={<ReportEditor />} />
          <Route
            path="/woredaDashboard/manageReport"
            element={<ManageReportWoredaAdmin />}
          />
        </Route>

        {/* zone admin dashboard */}

        <Route path="/zoneDashboard" element={<ZoneDashboard />}>
          <Route index element={<ZoneOrders />} />
          <Route path="/zoneDashboard/manageland" element={<WoredaData />} />
          <Route
            path={"/zoneDashboard/manageland/update/:id"}
            element={<WoredaUpdate />}
          />
          <Route path="/zoneDashboard/create" element={<ReportEditor />} />

          <Route
            path="/zoneDashboard/manageReport"
            element={<ManageReportZone />}
          />
          <Route path="/zoneDashboard/orders" element={<ZoneOrders />} />
        </Route>

        {/* region admin dashboard */}

        <Route path="/regionDashboard" element={<RegionDashboard />}>
          <Route index element={<RegionOrders />} />
          <Route
            path="/regionDashboard/manageZoneAdmin"
            element={<ZoneData />}
          />
          <Route
            path={"/regionDashboard/manageZoneAdmin/update/:id"}
            element={<ZoneUpdate />}
          />
          <Route
            path="/regionDashboard/manageZoneAdmin/view/:id"
            element={<DisplaySingleZone />}
          />

          <Route
            path="/regionDashboard/zoneAdminRegister"
            element={<ZoneRegistrationForm />}
          />
          <Route
            path="/regionDashboard/manageDistributor"
            element={<DistributorForm />}
          />
          <Route
            path={"/regionDashboard/manageDistributor/update/:id"}
            element={<DistributorUpdate />}
          />
          <Route
            path="/regionDashboard/manageDistributor/view/:id"
            element={<DisplaySingleDistributor />}
          />

          <Route
            path="/regionDashboard/registerDistributor"
            element={<DistributorRegistrationForm />}
          />

          <Route path="/regionDashboard/orders" element={<RegionOrders />} />
          <Route path="/regionDashboard/create" element={<ReportEditor />} />

          <Route
            path="/regionDashboard/manageReport"
            element={<ManageReportZone />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
