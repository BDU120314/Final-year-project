import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashLandAdmin = () => {
  const isLogin =JSON.parse(localStorage.getItem("isLogin"))
  
  return (
    <>
      {isLogin && (
        <div className="flex ">
 
          <div className="lg:basis-[18%] basis-0 h-[100vh] border">
            <Sidebar />
          </div>
          <div className="lg:basis-[82%] basis-[100%] border">
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