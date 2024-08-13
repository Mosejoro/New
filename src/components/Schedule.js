import React, { useState } from "react";
import Navbar from "./Navbar.js";

const Schedule = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const DayTwo = [
    {
      time: "8:00AM-9:00AM",
      event: "Breakfast and Networking",
    },
    {
      time: "9:00AM-9:30AM",
      event: "Opening Ceremony & Welcome Address by the Summit Chairs",
    },
    {
      time: "9:30AM-10:30AM",
      event: "Keynote Speeches by Distinguished Guest",
    },
    {
      time: "10:30AM-11:00AM",
      event: "Coffee Break and Networking",
    },
    {
      time: "11:00AM-11:50AM",
      event:
        'Panel Discussion 1: "The Future of the Digital Economy in Africa"',
    },
    {
      time: "11:50AM-12:00PM",
      event: "Transistion Break",
    },
    {
      time: "12:00PM-1:00PM",
      event: "Lunch Break",
    },
    {
      time: "1:00PM-1:50PM",
      event:
        "Fireside chat with Ministers of ICT and Digital Economy in Africa prese",
    },
    {
      time: "1:50PM-2:00PM",
      event: "Transition Break",
    },
    {
      time: "2:00PM-2:50PM",
      event: "Workshop Session 1 (Sponsored Workshop)",
    },
    {
      time: "2:50PM-3:15PM",
      event: "Coffee Break and Networking",
    },
    {
      time: "3:15PM-4:05PM",
      event: (
        <>
          "Panel Discussion 2: "Innovation and Beyond: Women Leading the Digital
          Revolution"
        </>
      ),
    },
    {
      time: "4:05PM-5:05PM",
      event: "Transition Break",
    },
    {
      time: "4:15PM-5:05PM",
      event:
        'Panel Discussion 3: "Africa Agenda 2063: Re-imagining Africa with AI"',
    },
    {
      time: "5:05PM-5:15PM",
      event: "Transition Break",
    },
    {
      time: "5:15PM-6:00PM",
      event: "Summary and Closing Remarks for the Day",
    },
  ];

  const DayThree = [
    {
      time: "8:00AM-9:00AM",
      event: "Breakfast and Networking",
    },
    {
      time: "9:00AM-9:30AM",
      event: "Day3 Opening Remarks by the Summit Chairs",
    },
    {
      time: "9:30AM-10:30AM",
      event:
        'Panel Discussion 4: "Innovations in Blockchain and AI: Policy and Regulatory Frameworks for a Digital Africa',
    },
    {
      time: "10:30AM-11:25AM",
      event:
        'Panel Discussion 5: "Empowering Startups: Driving Innovation and Growth in the Digital Age',
    },
    {
      time: "11:30AM-12:30PM",
      event:
        'Panel Discussion 5: "Empowering Startups: Driving Innovation and Growth in the Digital Age',
    },
    {
      time: "Afternoon on your own",
      event: "",
    },
    {
      time: "6:00PM-10:00PM",
      event: "African Business Dinner Night",
    },
    {
      time: "",
      event: "Award Ceremony",
    },
    {
      time: "",
      event: "Cultural Performances and Networking",
    },
  ];

  const DayFour = [
    {
      time: "9:00AM-12:00PM",
      event: "Guided City Tour of Sao Paulo",
    },
    {
      time: "12:00PM-1:00PM",
      event: "Lunch at a local restaurant",
    },
    {
      time: "1:00PM-3:00PM",
      event: "Continuation of the City Tour",
    },
    {
      time: "3:00PM-4:00PM",
      event: "Return to Hotels",
    },
  ];

  return (
    <div className="w-screen sm:p-12 pt-0 flex flex-col items-center">
      <Navbar />
      <h1 className="md:text-5xl text-3xl font-bold mt-12">
        SCHEDULE AT A GLANCE
      </h1>
      <h1 className="mt-4">Africa Digital Economy Summit - G20 Edition</h1>
      <h2 className="mt-2">21-24th October 2024</h2>

      <a href="/scchedule.pdf" download>
        <button className="bg-[#35bc3d] text-white border-2 border-[#35bc3d] p-2 px-4 rounded-lg font-semibold hover:scale-110 duration-150 ml-auto">
          Download Schedule
        </button>
      </a>

      <div className="w-[95%] mx-auto mt-10">
        {/* Accordion Item 1 */}
        <div className="mb-2 border border-gray-300 rounded-md">
          <div
            className="p-4 bg-[#95d5b2] text-white font-semibold cursor-pointer"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <div className="w-full flex justify-between">
              <h1 className=" text-xl sm:text-2xl">Day 1</h1>
              <h1 className="text-2xl sm:text-4xl font-light">22 October</h1>
            </div>
            <div className="w-full flex justify-between items-end">
              <h1 className="mt-6 text-2xl sm:text-4xl">Arrival and Welcome</h1>
            </div>
          </div>
          {isOpen1 && (
            <div className="p-4 bg-white text-black">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="">
                  <h1 className="text-[#35bc3d] text-2xl font-semibold">
                    Morning/Afternoon
                  </h1>
                  <ul className="list-disc text-lg md:text-xl ml-8 pt-4">
                    <li>Arrival of the participants</li>
                    <li>Check in at the designated hotels</li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-[#35bc3d] text-2xl font-semibold mt-4 lg:mt-0">
                    3:00PM - 6:00PM
                  </h1>
                  <ul className="list-disc text-lg md:text-xl ml-8 pt-4">
                    <li>Registration at the conference venue</li>
                    <li>Welcome packets distribution</li>
                  </ul>
                </div>
                <div className="">
                  <h1 className="text-[#35bc3d] text-2xl font-semibold mt-4 lg:mt-0">
                    6:30PM-8:30PM
                  </h1>
                  <ul className="list-disc text-lg md:text-xl ml-8 pt-4">
                    <li>Welcome Dinner</li>
                    <li>Opening Remarks</li>
                    <li>Networking Sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mb-2 border border-gray-300 rounded-md">
          <div
            className="p-4 bg-[#95d5b2] text-white font-semibold cursor-pointer"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <div className="w-full flex justify-between">
              <h1 className=" text-xl sm:text-2xl">Day 2</h1>
              <h1 className="text-2xl sm:text-4xl font-light">23 October</h1>
            </div>
            <div className="w-full flex justify-between items-end">
              <h1 className="mt-6 text-2xl sm:text-4xl">Main Event</h1>
            </div>
          </div>
          {isOpen2 && (
            <div className="p-4 bg-white text-black">
              <div className="flex flex-col">
                {DayTwo.map((val, key) => (
                  <div
                    key={key}
                    className="flex flex-col md:flex-row text-xl my-1"
                  >
                    <h1 className="text-[#35bc3d] mr-2 font-semibold md:w-[25%] md:min-w-[240px]">
                      {val.time}
                    </h1>
                    <h1 className=" md:w-[75%]">{val.event}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mb-2 border border-gray-300 rounded-md">
          <div
            className="p-4 bg-[#95d5b2] text-white font-semibold cursor-pointer"
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <div className="w-full flex justify-between">
              <h1 className=" text-xl sm:text-2xl">Day 3</h1>
              <h1 className="text-2xl sm:text-4xl font-light">24 October</h1>
            </div>
            <div className="w-full flex justify-between items-end">
              <h1 className="mt-6 text-2xl sm:text-4xl">
                African Business Dinner Night/Award Night
              </h1>
            </div>
          </div>
          {isOpen3 && (
            <div className="p-4 bg-white text-black">
              <div className="flex flex-col">
                {DayThree.map((val, key) => (
                  <div
                    key={key}
                    className="flex flex-col md:flex-row text-xl my-1"
                  >
                    <h1 className="text-[#35bc3d] mr-2 font-semibold md:w-[25%] md:min-w-[240px]">
                      {val.time}
                    </h1>
                    <h1 className=" md:w-[75%]">{val.event}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mb-2 border border-gray-300 rounded-md">
          <div
            className="p-4 bg-[#95d5b2] text-white font-semibold cursor-pointer"
            onClick={() => setIsOpen4(!isOpen4)}
          >
            <div className="w-full flex justify-between">
              <h1 className=" text-xl sm:text-2xl">Day 4</h1>
              <h1 className="text-2xl sm:text-4xl font-light">25 October</h1>
            </div>
            <div className="w-full flex justify-between items-end">
              <h1 className="mt-6 text-2xl sm:text-4xl">City Tour</h1>
            </div>
          </div>
          {isOpen4 && (
            <div className="p-4 bg-white text-black">
              <div className="flex flex-col">
                {DayFour.map((val, key) => (
                  <div
                    key={key}
                    className="flex flex-col md:flex-row text-xl my-1"
                  >
                    <h1 className="text-[#35bc3d] mr-2 font-semibold md:w-[25%] md:min-w-[240px]">
                      {val.time}
                    </h1>
                    <h1 className=" md:w-[75%]">{val.event}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mb-2 border border-gray-300 rounded-md">
          <div
            className="p-4 bg-[#95d5b2] text-white font-semibold cursor-pointer"
            onClick={() => setIsOpen5(!isOpen5)}
          >
            <div className="w-full flex justify-between">
              <h1 className=" text-xl sm:text-2xl">Day 5</h1>
              <h1 className="text-2xl sm:text-4xl font-light">26 October</h1>
            </div>
            <div className="w-full flex justify-between items-end">
              <h1 className="mt-6 text-2xl sm:text-4xl">
                Departure and Farewell
              </h1>
            </div>
          </div>
          {isOpen5 && (
            <div className="p-4 bg-white text-black">
              <div className="flex flex-col">
                <h1 className="text-[#35bc3d] mr-2 font-semibold">
                  Departure of participants
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
