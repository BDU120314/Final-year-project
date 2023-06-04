import React from 'react'
import Sidebar from './Sidebar'
import DashView from '../DashboardWoreda/DashView'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'

const DashLandAdmin = () => {
  // const user = useSelector((state) => state.auth.user)
  const isLogin = useSelector((state) => state.auth.isLogin);
  
  return (
    <>
      {isLogin && (
        <div className="flex ">
          <div className="basis-[17%] h-[100vh] border">
            <Sidebar />
          </div>
          <div className="basis-[83%] border">
            {/* <DashView username="Chale" links="/landadmin_dashboard/register " /> */}
            <div className="">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DashLandAdmin