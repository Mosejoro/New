import React, { useState, useEffect } from "react";
import ticket from "./media/ticket.png";
import tick from "./media/tick.png";

const Tickets = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const eventDate = new Date("2024-09-30");
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;
      const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysLeft(daysLeft);
    };

    calculateDaysLeft();

    const timer = setInterval(calculateDaysLeft, 86400000); // Update every 24 hours

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="w-full bg-[#95d5b2] flex flex-col justify-center items-center py-12">
      <h1 className="text-[#35bc3d] font-bold text-6xl">Buy Tickets</h1>
      <div className="h-2 w-40 bg-[#35bc3d] rounded-full my-4"></div>
      <div className="flex flex-col lg:flex-row items-center mt-8">
        <div className="bg-black/10 h-[400px] lg:h-[630px] w-[360px] sm:w-[500px] lg:w-[300px] xl:w-[380px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4">
          <h1 className="text-white font-bold text-4xl">Virtual</h1>
          <img className="w-[90px] my-2" src={ticket} alt="ticket"></img>
          <div className="flex">
            <h1 className="text-4xl text-[#005720] font-bold ml-2">$30</h1>
          </div>
          <button className="m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white hover:scale-110 duration-150 mb-8">
            Buy Now
          </button>
          <div className="flex flex-col items-start w-[95%]">
            <div className="flex items-center pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className=" font-bold text-sm lg:text-md w-[90%]">
                Virtual participation to the event!
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black/10 h-[440px] lg:h-[680px] w-[360px] sm:w-[500px] lg:w-[300px] xl:w-[400px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4 relative">
          <h1 className="text-white font-bold text-4xl">Basic</h1>
          <img className="w-[90px] my-2" src={ticket} alt="ticket"></img>
          <div className="flex">
            <h1 className="text-4xl text-[#005720] font-bold ml-2">$150</h1>
          </div>
          <button className="m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white hover:scale-110 duration-150 mb-8">
            Buy Now
          </button>
          <div className="flex flex-col items-start w-[95%]">
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className="font-bold text-sm lg:text-md w-[90%]">
                General entry to event venue
              </h1>
            </div>
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className=" font-bold text-sm lg:text-md w-[90%]">
                Exclusive to Africans and friends of Africa residing in Brazil.
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black/10 h-[650px] lg:h-[680px] w-[360px] sm:w-[500px] lg:w-[300px] xl:w-[400px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4 relative">
          <h1 className="  font-bold text-white text-4xl">Standard</h1>
          <img className="w-[90px] my-2" src={ticket} alt="ticket"></img>
          <div className="flex">
            <h1 className="text-4xl text-[#005720] font-bold ml-2">$500</h1>
          </div>
          <button className="m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white hover:scale-110 duration-150 mb-8">
            Buy Now
          </button>
          <div className="flex flex-col items-start w-[95%]">
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className=" font-bold text-sm lg:text-md w-[90%]">
                ⁠Access to all keynote sessions and panel discussions.
              </h1>
            </div>
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className=" font-bold text-sm lg:text-md w-[90%]">
                ⁠Entry to the networking zone and exhibition hall.
              </h1>
            </div>
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className=" font-bold text-sm lg:text-md w-[90%]">
                Swag bag with event materials and sponsor information.
              </h1>
            </div>
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className="font-bold text-sm lg:text-md w-[90%]">
                Tourism package with guided tours to major attractions.
              </h1>
            </div>
            <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className="font-bold text-sm lg:text-md w-[90%]">
                VISA processing support
              </h1>
            </div>
            <div className="flex items-center pb-1 w-full my-1">
              <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
                <img src={tick} className="h-[70%]" alt="tick"></img>
              </div>
              <h1 className="font-bold text-sm lg:text-md w-[90%]">
                ⁠Invitation to the Africa Business dinner with industry leaders.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/10 h-[580px] lg:h-[650px] w-[360px] sm:w-[500px] lg:w-[320px] xl:w-[380px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4">
        <h1 className="text-white font-bold text-4xl">Premium</h1>
        <img className="w-[90px] my-2" src={ticket} alt="ticket"></img>
        <div className="flex">
          <h1 className="text-4xl text-[#005720] font-bold ml-2">$1000</h1>
        </div>
        <button className="m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white hover:scale-110 duration-150 mb-8">
          Buy Now
        </button>
        <div className="flex flex-col items-start w-[95%]">
          <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
            <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
              <img src={tick} className="h-[70%]" alt="tick"></img>
            </div>
            <h1 className="font-bold text-sm lg:text-md  w-[90%]">
              ⁠All benefits of the Standard Ticket.
            </h1>
          </div>
          <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
            <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
              <img src={tick} className="h-[70%]" alt="tick"></img>
            </div>
            <h1 className=" font-bold text-sm lg:text-md w-[90%]">
              Access to exclusive workshops and hands-on sessions.
            </h1>
          </div>
          <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
            <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
              <img src={tick} className="h-[70%]" alt="tick"></img>
            </div>
            <h1 className=" font-bold text-sm lg:text-md w-[90%]">
              ⁠VIP seating for keynote sessions.
            </h1>
          </div>
          <div className="flex items-center border-b-[1px] pb-1 w-full my-1">
            <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
              <img src={tick} className="h-[70%]" alt="tick"></img>
            </div>
            <h1 className=" font-bold text-sm lg:text-md w-[90%]">
              ⁠Premium goodie bag with high-value items and exclusive event
              memorabilia
            </h1>
          </div>
          <div className="flex items-center pb-1 w-full my-1">
            <div className="w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center">
              <img src={tick} className="h-[70%]" alt="tick"></img>
            </div>
            <h1 className=" font-bold text-sm lg:text-md w-[90%]">
              ⁠Entry to the VIP networking lounge/deal room
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
