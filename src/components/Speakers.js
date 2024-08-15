import React, { useState, useEffect } from "react";

import speaker1 from "./media/adetunji.jpeg";
import speaker2 from "./media/profkelly.jpeg";
import speaker3 from "./media/speaker3.jpeg";
import speaker4 from "./media/speaker4.jpeg";
import speaker5 from "./media/speaker5.jpeg";
import speaker6 from "./media/speaker6.jpeg";
import linkedin from "./media/linkedin.png";
import books from "./media/books.png";
import sarah from "./media/Sarah.jpg";
import amanda from "./media/Amanda.jpg";

const Speakers = () => {
  const [visibleSpeakers, setVisibleSpeakers] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  const speakers = [
    {
      name: "Dr. Christopher Brooks",
      title: "Managing Partner; Brown Venture Group",
      image: speaker3,
      linkedin:
        "https://www.linkedin.com/in/drchrisbrooks?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sarah Fernn",
      title: "CEO at Stardust, Sao Paulo, Brasil",
      image: sarah,
      linkedin: "https://www.linkedin.com/in/sarahfernn/",
    },
    {
      name: "Prof. Kelly Kingsly Mua",
      title: "Finance Engineer | Board Director at ATIDI",
      image: speaker2,
      linkedin:
        "https://www.linkedin.com/in/adetunji-anthony-adeleke-13567312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Armand Gaetan Ngueti",
      title:
        "Founder & CEO at Universal Broadband & Technology Services - International Corp (UBTS)",
      image: speaker4,
      linkedin: "https://www.linkedin.com/in/armandngueti/",
    },
    {
      name: "Adetunji Anthony Adeleke",
      title: "Co-Founder at CHIMENET, Indianapolis, Indiana, USA",
      image: speaker1,
      linkedin:
        "https://www.linkedin.com/in/adetunji-anthony-adeleke-13567312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Dr Salisu Uba",
      title: "Founder and CEO: NatQuest",
      image: speaker5,
      linkedin:
        "https://www.linkedin.com/in/adetunji-anthony-adeleke-13567312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Amanda Awange",
      title: "AI Product Manager : Factset LTD, London, England.",
      image: amanda,
      linkedin: "https://www.linkedin.com/in/amanda-awange-21b090184/",
    },
    {
      name: "Radek Wierzbicki",
      title: "Managing Director - Unsung Heroes Foundation, Warsaw Poland",
      image: speaker6,
      linkedin: "https://www.linkedin.com/in/radwierz/",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleSpeakers(window.innerWidth < 768 ? 4 : 6);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSeeMore = () => {
    setVisibleSpeakers(speakers.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#005720]">
        {speakers.slice(0, visibleSpeakers).map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-full xl:w-[300px] mr-4 my-8"
          >
            <div className="flex h-40 w-40 sm:h-40 sm:w-40 lg:h-60 lg:w-60 xl:h-60 xl:w-60 bg-black rounded-full relative">
              <a href={speaker.linkedin} target="blank">
                <div className="absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#35bc3d] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center">
                  <img className="h-[50%]" src={linkedin} alt="LinkedIn"></img>
                </div>
              </a>
              <img
                className="w-full rounded-full"
                src={speaker.image}
                alt={speaker.name}
              ></img>
            </div>
            <div className="h-full w-1/2 sm:w-full pr-4 sm:pr-0">
              <h1 className="text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#35bc3d] mt-8">
                {speaker.name}
              </h1>
              <h3 className="text-center text-base text-md lg:text-lg font-light text-gray-300">
                {speaker.title}
              </h3>
            </div>
          </div>
        ))}
        {visibleSpeakers < speakers.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="bg-[#35bc3d] text-white px-4 py-2 rounded hover:bg-[#2da034]"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Speakers;
