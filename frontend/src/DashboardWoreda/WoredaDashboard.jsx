import React from 'react'
import WoredaSideBar from "./WoredaSideBar";
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WoredaHeader from './WoredaHeader';

const WoredaDashboard = () => {
   const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <>
      {isLogin && (
        <div className="flex ">
          <div className="basis-[17%] h-[100vh] border">
            <WoredaSideBar />
          </div>
          <div className="basis-[83%] border">
            <WoredaHeader />
            <div className="mt-[70px]">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WoredaDashboard;