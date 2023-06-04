import React from 'react'
import Sidebar from './Sidebar'
import DashView from '../DashboardWoreda/DashView'
import { Outlet } from 'react-router-dom'

const DashLandAdmin = () => {
  return (
    <div className="flex ">
      <div className="basis-[14%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[86%] border">
        <DashView username="Chale" links="/landadmin_dashboard/register_farmers " />
        <div className='mt-16'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default DashLandAdmin