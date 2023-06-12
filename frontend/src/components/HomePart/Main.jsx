import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images.jpg";
import download from "../../assets/Photo/download.jpg";
import urea from "../../assets/Photo/urea.jpg";
import chemical_fertilizer from "../../assets/Photo/chemical_fertilizer.jpg";
import green from "../../assets/Green.jpg";

const Main = () => {
  return (
    <div className="">
      <div className="mb-20">
        <div className="ext-center">
          <div
            style={{
              backgroundImage: `url(${green})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "500px",
            }}
          >
            <h2 className="font-semibold tracking-wide text-black uppercase text-3xl">
              እንኳን ወደ አማራ ክልል የግብርና ግብዓት ፎርም በደህና መጡ
            </h2>
          </div>

          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl"></p>
        </div>
        <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=pesti side">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={images}
                  alt="New"
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Pesti Side</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Receive more sales by selling across multiple sales channels
                instead of just having a single point of entry.
              </p>
            </Link>
          </div>
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Agrochemicals">
              <div className="flex flex-col items-center mb-6">
                <div className="ml-4 text-xl">Agrochemicals</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Apply beautiful overlays to every product image distributed
                through our platform. A visual touch.
              </p>
            </Link>
          </div>
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Organic Fertilizer">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={download}
                  alt="New"
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Organic Fertilizer</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Apply filters and control which products to sell on each sales
                channel. E.g. exclude products with low margins.
              </p>
            </Link>
          </div>
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Chemical Fertilizer">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={chemical_fertilizer}
                  alt=""
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Chemical Fertilizer</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Map product categories with each sales channel's own categories
                and achieve better results and lower costs.
              </p>
            </Link>
          </div>
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Organic Farming">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={urea}
                  alt=""
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Organic Farming</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Modify products with extra properties and achieve the maximum
                output for each installed sales channel.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
