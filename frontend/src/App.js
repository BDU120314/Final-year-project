import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandAdminForm1 from "./DashboardWoreda/KebeleRep/LandAdminForm";
import UpdateLandAdmin from "./DashboardWoreda/KebeleRep/UpdateLandAdmin";
import SingleLandAdmin from "./DashboardWoreda/KebeleRep/SingleLandAdmin";
import AdminRegistrationForm from "./DashboardWoreda/KebeleRep/registeradmin";
import WoredaData from "./DashboardZone/WoredaRep/woreda_formData";
import WoredaUpdate from "./DashboardZone/WoredaRep/updateWoreda";
import ZoneData from "./dashboardDirectoriet/ZoneRep/zone_formData";
import ZoneUpdate from "./dashboardDirectoriet/ZoneRep/updateZone";
import DisplaySingleZone from "./dashboardDirectoriet/ZoneRep/displaySingleZone";
import ZoneRegistrationForm from "./dashboardDirectoriet/ZoneRep/zonerepRegister";
import DistributorForm from "./dashboardDirectoriet/displayDistributer/distributor_form";
import DistributorUpdate from "./dashboardDirectoriet/displayDistributer/distributorUpdate";
import DisplaySingleDistributor from "./dashboardLandAdmin/FarmersData/displaySingleData";
import DistributorRegistrationForm from "./dashboardDirectoriet/displayDistributer/distributerRegister";
import DashLandAdmin from "./dashboardLandAdmin/DashLandAdmin";
import FarmersData from "./dashboardLandAdmin/FarmersData/farmers_data";
import FarmerUpdate from "./dashboardLandAdmin/FarmersData/farmerUpdate";
import FarmerRegistrationForm from "./dashboardLandAdmin/FarmersData/FarmersForm";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DisplaySingleData from "./dashboardLandAdmin/FarmersData/displaySingleData";
import OrderForm from "./farmersDashboard/order/orderForm";
import Main from "./components/HomePart/Main";
import FarmerDashboard from "./pages/FarmerDashboard";
import ReportEditor from "./components/editor/ReportEditor";
import PestiSide from "./components/pestiside/PestiSide";
import Post from "./components/posts/Post";
import LandAdminManageAccount from "./components/landAdmin/landadminmangereport";
import WoredaDashboard from "./DashboardWoreda/WoredaDashboard";
import ManageReportWoredaAdmin from "./DashboardWoreda/ManageReportWoredaAdmin";
import ZoneDashboard from "./DashboardZone/ZoneDashboard";
import ManageReportZone from "./DashboardZone/ManageReportZone";
import ZoneOrders from "./DashboardZone/ZoneOrders";
import WoredaOrders from "./DashboardWoreda/WoredaOrders";
import RegionDashboard from "./dashboardDirectoriet/RegionDashboard";
import RegionOrders from "./dashboardDirectoriet/RegionOrders";
import ManageOrders from "./farmersDashboard/order/ManageOrders";
import UpdateOrder from "./farmersDashboard/order/UpdateOrder";
import ZoneDisplay from "./dashboardDirectoriet/Zone/zonedisplay";
import AddingZone from "./dashboardDirectoriet/Zone/addzone_form";
import ModifyZone from "./dashboardDirectoriet/Zone/zonemodify";
import SingleZone from "./dashboardDirectoriet/Zone/singlezone";
import WoredaDisplay from "./DashboardZone/Woreda/woreda_display";
import AddingWoreda from "./DashboardZone/Woreda/addworeda_form";
import ModifyWoreda from "./DashboardZone/Woreda/woreda_Update";
import AddingKebele from "./DashboardWoreda/Kebele/addKebele_form";
import KebeleDisplay from "./DashboardWoreda/Kebele/kebeledisplay";
import ModifyKebele from "./DashboardWoreda/Kebele/kebelemodify";
import DisplaySingleKebele from "./DashboardWoreda/Kebele/singlekebele";
import WoredaRegistrationForm from "./DashboardZone/WoredaRep/woredarepRegister";
import CardOf from "./components/pestiside/CardOf";

import SingleWoreda from "./DashboardZone/Woreda/singleworeda";
import DisplaySingleWoreda from "./DashboardZone/WoredaRep/displaySingleWoreda";
import ManageReportRegion from "./dashboardDirectoriet/ManageReportRegion";
import RegionEditor from "./dashboardDirectoriet/RegionEditor";
import ZoneEditor from "./DashboardZone/ZoneEditor";
import ReciveRegionReport from "./DashboardZone/ReciveRegionReport";
import ReciveZoneReport from "./DashboardWoreda/RecivedZoneReport";
import WoredaEditor from "./DashboardWoreda/WoredaEditor";
import ReciveWoredaReport from "./dashboardLandAdmin/RecivedWoredaReport";

const App = () => {
  return (
    <div>
      <Routes>
        {/* home page or landing page */}
        <Route path="/card" element={<CardOf />} />
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
            element={<ManageOrders />}
          />
          <Route index element={<ManageOrders />} />
          <Route
            path={"/farmerDashboard/manageAccount/order/update/:id"}
            element={<UpdateOrder />}
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
          <Route
            path="/landAdminDashboard/coming"
            element={<ReciveWoredaReport />}
          />
        </Route>

        {/* woreda Admin Dashboard */}

        <Route path="/woredaDashboard" element={<WoredaDashboard />}>
          <Route index element={<WoredaOrders />} />
          <Route path="/woredaDashboard/addkebele" element={<AddingKebele />} />
          <Route
            path="/woredaDashboard/managekebele"
            element={<KebeleDisplay />}
          />
          <Route
            path="/woredaDashboard/managekebele/update/:id"
            element={<ModifyKebele />}
          />
          <Route
            path="/woredaDashboard/managekebele/view/:id"
            element={<DisplaySingleKebele />}
          />

          {/* Kebele Land Admin */}
          <Route
            path="/woredaDashboard/manageland"
            element={<LandAdminForm1 />}
          />
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
          <Route path="/woredaDashboard/create" element={<WoredaEditor />} />
          <Route
            path="/woredaDashboard/manageReport"
            element={<ManageReportWoredaAdmin />}
          />
          <Route
            path="/woredaDashboard/comingReport"
            element={<ReciveZoneReport />}
          />
        </Route>

        {/* zone admin dashboard */}

        <Route path="/zoneDashboard" element={<ZoneDashboard />}>
          <Route index element={<ZoneOrders />} />
          <Route path="/zoneDashboard/addworeda" element={<AddingWoreda />} />
          <Route
            path="/zoneDashboard/manageWoreda"
            element={<WoredaDisplay />}
          />
          <Route
            path="/zoneDashboard/manageWoreda/update/:id"
            element={<ModifyWoreda />}
          />
          <Route
            path="/zoneDashboard/manageWoreda/view/:id"
            element={<SingleWoreda />}
          />

          {/* woreda representative */}
          <Route
            path="/zoneDashboard/register"
            element={<WoredaRegistrationForm />}
          />
          <Route
            path="/zoneDashboard/manageworedaAdmin"
            element={<WoredaData />}
          />
          <Route
            path={"/zoneDashboard/manageworedaAdmin/update/:id"}
            element={<WoredaUpdate />}
          />
          <Route
            path={"/zoneDashboard/manageWoredaAdmin/view/:id"}
            element={<DisplaySingleWoreda />}
          />
          <Route path="/zoneDashboard/create" element={<ZoneEditor />} />

          <Route
            path="/zoneDashboard/manageReport"
            element={<ManageReportZone />}
          />
          <Route
            path="/zoneDashboard/coming"
            element={<ReciveRegionReport />}
          />
          <Route path="/zoneDashboard/orders" element={<ZoneOrders />} />
        </Route>

        {/* region admin dashboard */}

        <Route path="/regionDashboard" element={<RegionDashboard />}>
          <Route index element={<RegionOrders />} />
          <Route path="/regionDashboard/ZoneAdd" element={<AddingZone />} />
          <Route path="/regionDashboard/manageZone" element={<ZoneDisplay />} />
          <Route
            path="/regionDashboard/manageZone/update/:id"
            element={<ModifyZone />}
          />
          <Route
            path="/regionDashboard/manageZone/view/:id"
            element={<SingleZone />}
          />

          {/* zone representative */}
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
          <Route path="/regionDashboard/create" element={<RegionEditor />} />

          <Route
            path="/regionDashboard/manageReport"
            element={<ManageReportRegion />}
          />
          <Route path="/regionDashboard/createpost" element={<Post />} />
          <Route path="/regionDashboard/managepost" element={<Post />} />
        </Route>
      </Routes> 
    </div>
  );
};

export default App;
