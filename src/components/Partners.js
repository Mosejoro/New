import React from "react";

import t20 from "./media/t20.png";
import partner1 from "./media/partner6.jpg";
import partner2 from "./media/partner2.png";
import partner3 from "./media/partner3.png";
import stardust from "./media/Stardust.jpg";

const Partners = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center py-12">
      <h1 className="text-[#005720] text-4xl sm:text-6xl font-bold mb-8">
        OUR PARTNERS
      </h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3">
        <div className="flex justify-center items-center w-full">
          <img className="w-[90%]" src={t20} />
        </div>
        <div className="flex justify-center items-center w-full">
          <img className="w-[50%]" src={partner1} />
        </div>
        <div className="flex justify-center items-center w-full">
          <img className="w-[70%]" src={partner2} />
        </div>
        <div className="flex justify-center items-center w-full">
          <img className="w-[70%]" src={partner3} />
        </div>
        <div className="flex justify-center items-center w-full">
          <img className="w-[70%]" src={stardust} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
