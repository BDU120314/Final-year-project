import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/pestiside.jpeg";
import download from "../../assets/seed.jpg";
import urea from "../../assets/Photo/urea.jpg";
import chemical_fertilizer from "../../assets/Photo/chemical_fertilizer.jpg";
import green from "../../assets/Green.jpg";
import About from "../../pages/About";

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
            <h2 className="font-semibold tracking-wide flex items-center justify-center text-black uppercase text-3xl">
              እንኳን ወደ አማራ ክልል የግብርና ግብዓት ፎርም በደህና መጡ
            </h2>
          </div>

          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl"></p>
        </div>
        <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="border hover:scale-95 shadow-md">
            <Link to="/pestiSide?filter=Chemicals">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={images}
                  alt="New"
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Chemicals</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Pesticides – also known as agricultural chemicals – are
                substances that are used to protect plants against pests. They
                include herbicides to kill weeds, fungicides to get rid of
                diseases and insecticides to kill bugs. Those chemicals are
                unfortunately not only getting rid of the unwanted but can also
                cause harm to our health and the environment.
              </p>
            </Link>
          </div>
          {/* <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Agrochemicals">
              <div className="flex flex-col items-center mb-6">
                <div className="ml-4 text-xl">Agrochemicals</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Apply beautiful overlays to every product image distributed
                through our platform. A visual touch.
              </p>
            </Link>
          </div> */}
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Seed">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={download}
                  alt="New"
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Seed</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                Organic Cover Crop Seed Product ID: 4170G Six-row barley with
                improved disease resistance. A six-row malting barley for spring
                sowing that has improved Fusarium head blight (or scab)
                resistance. Higher yielding than Robust barley, which it
                replaced. Sow at 85 lb./acre or 2 lb./1,000
              </p>
            </Link>
          </div>
          {/* <div className="border hover:scale-95 shadow-lg">
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
          </div> */}
          <div className="border hover:scale-95 shadow-lg">
            <Link to="/pestiSide?filter=Fertilizers">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={urea}
                  alt=""
                  className="h-[300px] w-full object-cover rounded-[5px]"
                />
                <div className="ml-4 text-xl">Fertilizers</div>
              </div>
              <p className="leading-loose px-5 text-gray-500 dark:text-gray-200 text-md">
                fertilizer, natural or artificial substance containing the
                chemical elements that improve growth and productiveness of
                plants. Fertilizers enhance the natural fertility of the soil or
                replace chemical elements taken from the soil by previous crops.
              </p>
            </Link>
          </div>
        </div>
        <About />
      </div>
    </div>
  );
};

export default Main;
