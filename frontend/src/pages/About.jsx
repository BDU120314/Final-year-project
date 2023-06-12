import React from "react";
import ala from "./About/ala.jpg";
import kid from "./About/kid.jpg";
import end from "./About/end.jpg";

const About = () => {
  return (
    <div className="bg-gray-400 p-4  xl:h-screen">
      <div>
        <div className="text-4xl text-center ">
          <h1>Developers of the website</h1>
        </div>
        <h3 className="text-center text-2xl">We are IT 4th Students</h3>
        <div className="flex flex-wrap max-xl:grid-flow-col">
          <div className="w-1/3 p-4">
            <img src={end} alt="Endabay" class="h-[100px] w-[100px] rounded-md" />
            <h4>NAME: Endeabay Feleke</h4>
            <h4>PHONE NUMBER: 0943530403</h4>
          </div>
          <div className="w-1/3 p-4">
            <img src={kid} alt="Kidist" class="h-[100px] w-[100px] rounded-md" />
            <h4>NAME: Kidist Woreta</h4>
            <h4>PHONE NUMBER: 0974780439</h4>
          </div>
          <div className="w-1/3 p-4">
            <img src={ala} alt="ALAMIN" class="h-[100px] w-[100px] rounded-md" />
            <h4>NAME: Alamin Esayas</h4>
            <h4>PHONE NUMBER: 0960425442</h4>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
