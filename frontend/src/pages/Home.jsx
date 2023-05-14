import React from "react";
import Foooter from "../components/HomePart/footer";
import Main from "../components/HomePart/Main";
import Navbar from "../components/HomePart/Header";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-50 h-screen">
      <Navbar />
      <main className="mt-[100px]">
        <Main />
      </main>
      <Foooter />
</div>
  );
};

export default Home;
