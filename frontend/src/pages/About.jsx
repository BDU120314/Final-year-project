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
            <img src={end} alt="Endabay" class="h-[100px] w-[100px]" />
            <h4>NAME: Endeabay Feleke</h4>
            <h4>PHONE NUMBER: 0943530403</h4>
          </div>
          <div className="w-1/3 p-4">
            <img src={kid} alt="Kidist" class="h-[100px] w-[100px]" />
            <h4>NAME: Kidist Woreta</h4>
            <h4>PHONE NUMBER: 0974780439</h4>
          </div>
          <div className="w-1/3 p-4">
            <img src={ala} alt="ALAMIN" class="h-[100px] w-[100px]" />
            <h4>NAME: Alamin Esayas</h4>
            <h4>PHONE NUMBER: 0960425442</h4>
          </div>
        </div>
      </div>
      <div className=" ">
        <footer class="bg-gray-700 dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
          <div class="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
            <ul class="flex flex-wrap justify-center pb-8 text-lg font-light">
              <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                  <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Contacts
                  </h2>
                  <ul>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">0582206822</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">amagabureau@gmail.com</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Found Around Grand Building</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                  <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Social Media
                  </h2>
                  <ul>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">telegram</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Facebook</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Twitter</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                  <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Site Navigation
                  </h2>
                  <ul>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">About Us</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Contact Us</a>
                    </li>
                    <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="container mx-auto flex justify-between items-center">
              <p className="text-sm">
                © 2023 For Bahir Dar University. All rights reserved.
              </p>
              <p className="text-sm">
                Designed and built by Bit 4th Year IT Student
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
