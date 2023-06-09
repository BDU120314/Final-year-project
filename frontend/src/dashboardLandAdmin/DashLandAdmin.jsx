import React from 'react'
import Sidebar from './Sidebar'
import DashView from '../DashboardWoreda/DashView'
import { Outlet } from 'react-router-dom'

const DashLandAdmin = () => {
  return (
    <div className="flex ">
      <div className="basis-[16%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[84%] border">
        <DashView username="Chale" links="/landadmin_dashboard/register " />
        <div className='mt-[70px]'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default DashLandAdmin