import React from "react";
// import ala from "./About/ala.jpg";
// import kid from "./About/kid.jpg";
// import end from "./About/end.jpg";
import checkIcon from "../assets/157822.svg";

const About = () => {
  return (
    <div>
      <section className="bg-white" id="vission">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex justify-center flex-col gap-5 items-center px-20 bg-gray-50 py-10 mb-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 ">
              Amhara Agricultural Bureau
            </h2>
            <p className="text-md text-gray-500">
              The Amhara Agricultural Bureau is an important governmental
              organization in the Amhara region of Ethiopia, focused on
              overseeing and promoting agricultural development in the area. The
              bureau plays a crucial role in supporting farmers, implementing
              agricultural policies, and ensuring food security in the region.
            </p>
            <p className="text-md text-gray-500">
              The primary objective of the Amhara Agricultural Bureau is to
              enhance agricultural productivity and improve the livelihoods of
              farmers. It works towards achieving this goal by providing various
              services, including technical assistance, training programs, and
              access to agricultural resources and inputs.
            </p>
            <p className="text-md text-gray-500">
              One of the key responsibilities of the bureau is to develop and
              implement agricultural policies and strategies that align with the
              region's needs and priorities. This involves conducting research
              and analysis to identify the challenges and opportunities in the
              agricultural sector and formulating appropriate policies to
              address them. By doing so, the bureau aims to create an enabling
              environment for agricultural development and ensure sustainable
              growth in the sector.
            </p>
            <p className="text-md text-gray-500">
              The Amhara Agricultural Bureau also focuses on promoting modern
              agricultural practices and technologies among farmers. It
              organizes training programs and demonstrations to educate farmers
              on improved farming techniques, efficient water management, soil
              conservation, and pest control methods. By disseminating knowledge
              and best practices, the bureau aims to enhance productivity,
              increase crop yields, and improve the overall quality of
              agricultural produce in the region.
            </p>
            <p className="text-md text-gray-500">
              Additionally, the bureau plays a critical role in providing
              support services to farmers, especially in terms of access to
              agricultural inputs such as seeds, fertilizers, and machinery. It
              collaborates with various stakeholders, including input suppliers
              and financial institutions, to ensure that farmers have the
              necessary resources to enhance their productivity and
              profitability.
            </p>
            <p className="text-md text-gray-500">
              Another important aspect of the Amhara Agricultural Bureau's work
              is promoting sustainable agricultural practices and environmental
              conservation. The bureau encourages farmers to adopt climate-smart
              agriculture techniques that help mitigate the impacts of climate
              change, conserve natural resources, and protect biodiversity. It
              also focuses on promoting organic farming practices and supporting
              farmers in accessing organic certification.
            </p>
            <p className="text-md text-gray-500">
              Overall, the Amhara Agricultural Bureau plays a crucial role in
              driving agricultural development, ensuring food security, and
              improving the livelihoods of farmers in the Amhara region. Through
              its various initiatives and programs, it strives to enhance
              productivity, promote sustainable practices, and contribute to the
              overall economic growth and well-being of the region.
            </p>
          </div>
          <h2 className="text-center text-slate-500 text-4xl font-bold tracking-tight sm:text-5xl">
            Our Vission And Mission
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-32">
            <blockquote className="rounded-lg bg-gray-50 p-8">
              <div className="flex items-center gap-4">
                <div>
                  <p className="mt-1 text-lg font-bold text-gray-800">
                    Vission
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-sm"
                  alt="checkIcon"
                />

                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  Working to achieve our mission and vision.
                </p>
              </div>

              <div className="flex justify-start items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-sm"
                  alt="checkIcon"
                />
                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  Working hard to fulfill customers need.
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-sm"
                  alt="checkIcon"
                />
                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  Make a society which have a culture of saving and investment.
                  Make a society which have a culture of saving and investment.
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-sm"
                  alt="checkIcon"
                />
                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  We believe agriculture is pillar for development.
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-sm"
                  alt="checkIcon"
                />
                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  Make sure societies participation and usability.
                </p>
              </div>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="mt-1 text-lg font-bold text-gray-800">
                      Mission
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={checkIcon}
                    className="text-blue-600 text-sm"
                    alt="checkIcon"
                  />

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                    Based on integrated water shed development, in
                    agro-ecological friendly manner, widely using the labor
                    force of farmers;
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={checkIcon}
                    className="text-blue-600 text-sm"
                    alt="checkIcon"
                  />
                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                    providing the extension services which is mainly
                    characterized by modern agricultural inputs and maximize the
                    benefit of farmers at a large extent.
                  </p>
                </div>
                {/* <div className="flex justify-center items-center gap-2">
                  <img
                    src={checkIcon}
                    className="text-blue-600 text-sm"
                    alt="checkIcon"
                  />
                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                    We are committed to providing an exceptional education that
                    is accessible, affordable, and prepares our graduates to
                    make meaningful contributions to their communities and the
                    world.
                  </p>
                </div> */}
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
