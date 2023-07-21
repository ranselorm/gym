import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex justify-center items-start flex-col lg:flex-row max-w-[1280px] mx-auto gap-[20px] px-6 lg:px-0 min-h-[400px]">
      {plans.map((plan, currentIndex) => {
        const { name, price, list, delay } = plan;
        const isActive = currentIndex === index;
        return (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
            key={currentIndex}
            className="cursor-pointer w-full md:max-w-[620px] lg:max-w-[300px]"
            onClick={() => setIndex(currentIndex)}
          >
            <div
              className={`${
                isActive
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              } transition duration-200 px-6 py-[40px] rounded-lg lg:h-[550px]`}
            >
              <div className="flex items-center flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`${
                      isActive
                        ? "bg-white text-neutral-500"
                        : "bg-neutral-500 text-white"
                    } px-4 py-2 font-semibold font-primary text-xl flex items-center justify-center mb-8`}
                  >
                    {name}
                  </div>
                  <div className="text-[40px] font-primary font-extrabold text-center flex flex-col justify-center items-center">
                    <div className="leading-none">
                      <span className="tracking-[0.1px]">{price}</span>
                      <span className="text-[20px] font-extrabold">$</span>
                    </div>
                    <span className="text-sm font-medium">/month</span>
                  </div>
                </div>
                {/* list & btn wrapper */}
                <div>
                  <ul className="flex flex-col gap-y-4 mb-8">
                    {list.map((item, index) => {
                      return (
                        <li className="flex items-center gap-x-4">
                          <BsCheckCircleFill className="text-sm" />
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    className={`${
                      isActive
                        ? "bg-white text-neutral-500"
                        : "border border-neutral-500"
                    } btn btn-sm rounded-sm lg:mx-auto`}
                  >
                    JOIN NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
