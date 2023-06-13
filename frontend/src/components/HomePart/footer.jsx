import React from "react";
import { Link } from "react-router-dom";

const Foooter = () => {
  return (
    <footer class="bg-gray-700 dark:bg-gray-800 pt-5 xl:pt-8 pb-10">
      <div class="max-w-screen-lg px-0 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-2 md:px-2 dark:text-gray-300">
        <ul class="flex flex-wrap justify-center pb-2 text-lg font-light">
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-0">
                Contacts
              </h2>
              <ul>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  Tele:<Link>058 220 5856/058 226 5501</Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  FAX:<Link>058 220 1510</Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  Email:{" "}
                  <a href="mailto:agri@amhara.gov.et">agri@amhara.gov.et</a>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  Location:{" "}
                  <Link>
                    <address>Found Around Grand Building</address>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-1">
                Social Media
              </h2>
              <ul>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="https://t.me/AmharaBureauofAgriculter">
                    telegram
                  </Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="https://www.facebook.com/search/top?q=amhara%20agricultural%20bureau">
                    Facebook
                  </Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="#">Twitter</Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="#">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-center">
              <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-1">
                Site Navigation
              </h2>
              <ul>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="#">About Us</Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="#">Contact Us</Link>
                </li>
                <li class="mb-1 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            <span>&copy;</span> {new Date().getFullYear()} For For ARMDOS.
            All rights reserved.
          </p>
          <p className="text-sm">
            Designed and built by Bit 4th Year IT Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
