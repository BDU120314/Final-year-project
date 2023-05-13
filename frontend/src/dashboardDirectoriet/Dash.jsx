import React from 'react'
import Sidebar from './Sidebar'
import DashView from './DashView'
import { Outlet } from 'react-router-dom'

const DashRegion = () => {
  return (
    <div className="flex ">
      <div className="basis-[14%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[86%] border">
        <DashView />
        <div className='mt-[70px]'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default DashRegion