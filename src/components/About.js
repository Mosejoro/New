import React, { useRef, useState } from "react";

import linkarrow from "./media/linkarrow.png";
import aboutimg from "./media/aboutimage.jpeg";
import infrastructure from "./media/infrastructure.png";
import fintech from "./media/fintech.png";
import education from "./media/education.png";
import publics from "./media/public-services.png";
import innovation from "./media/innovation.png";
import cyber from "./media/cybersecurity.png";
import sustain from "./media/sustainable.png";
import investment from "./media/investment.png";
import left from "./media/leftarrow.png";
import right from "./media/rightarrow.png";
import bluestar2 from "./media/tert.jpg";
import bluestar1 from "./media/tert 2.jpg";

import host1 from "./media/fummilayohost.jpeg";
import host2 from "./media/kelvinhost.jpeg";
import host3 from "./media/host3.jpeg";
import host4 from "./media/host4.jpeg";
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

const eventHighlights = [
  { img: infrastructure, title: "Digital Infrastructure and Connectivity" },
  { img: fintech, title: "Fintech and Financial Inclusion" },
  { img: publics, title: "E-Government and Public Services" },
  { img: education, title: "Digital Skills and Education" },
  { img: innovation, title: "Entrepreneurship and Innovation" },
  { img: cyber, title: "Cybersecurity and Data Protection" },
  { img: sustain, title: "Sustainable Development" },
  { img: investment, title: "Smart Investment" },
];

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortContent = (
    <>
      The African Digital Economy Summit is an impactful and forward-thinking
      conference designed to expedite the realization of Africa’s digital
      economy aspirations. The summit serves as a dynamic platform where key
      stakeholders, thought leaders, innovators, policymakers, and industry
      experts converge to foster collaboration, share insights, and device
      strategic solutions for advancing Africa’s digital landscape.
      <br />
      <br /> The Group of 20 Industrialized Nations (G20) will convene their
      annual summit in November 2024. The central theme of this summit is
      "Building a Just World and a Sustainable Planet." Recognizing the
      significant impact of inclusive digital transformation on national and
      sub-national economies as catalysts for economic growth, the G20 is
      fostering synergies with critical stakeholders worldwide to advance and
      enhance inclusive digital transformation. <br />
      <br />
      In alignment with this objective, the T20 has approved the convening of
      the Africa Digital Economy Summit as a strategic component of its general
      assembly. This event is scheduled to take place in Sao Paulo, Brazil, from
      October 21st to 24th, 2024.
    </>
  );
  const fullContent = (
    <>
      The African Digital Economy Summit is an impactful and forward-thinking
      conference designed to expedite the realization of Africa’s digital
      economy aspirations. The summit serves as a dynamic platform where key
      stakeholders, thought leaders, innovators, policymakers, and industry
      experts converge to foster collaboration, share insights, and device
      strategic solutions for advancing Africa’s digital landscape.
      <br />
      <br />
      The Group of 20 Industrialized Nations (G20) will convene their annual
      summit in November 2024. The central theme of this summit is "Building a
      Just World and a Sustainable Planet." Recognizing the significant impact
      of inclusive digital transformation on national and sub-national economies
      as catalysts for economic growth, the G20 is fostering synergies with
      critical stakeholders worldwide to advance and enhance inclusive digital
      transformation.
      <br />
      <br /> In alignment with this objective, the T20 has approved the
      convening of the Africa Digital Economy Summit as a strategic component of
      its general assembly. This event is scheduled to take place in Sao Paulo,
      Brazil, from October 21st to 24th, 2024.
      <br />
      <br /> The Africa Digital Economy Summit aims to bring together Heads of
      Government, policymakers, innovators, entrepreneurs, and a broad range of
      stakeholders to explore the challenges and opportunities in stimulating
      and consolidating Africa’s digital economy for robust engineering and
      economic growth.
      <br />
      <br /> Deliberations from this pre-summit will contribute to the main
      agenda of the G20 program, which will be attended by leaders from the G20
      member countries (Argentina, Australia, Brazil, Canada, China, France,
      Germany, India, Indonesia, Italy, Japan, Republic of Korea, Mexico,
      Russia, Saudi Arabia, South Africa, Türkiye, United Kingdom, and the
      United States) alongside the African Union and the European Union.
      <br />
      <br /> Hosting the G20 Edition of AfriDES in São Paulo on the sidelines of
      the G20 summit in Brazil presents a unique opportunity to engage with
      Governments, Global leaders, policymakers, and industry stakeholders to
      foster collaboration and share best practices.
    </>
  );
  // Speakers
  const [visibleSpeakers, setVisibleSpeakers] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  const speakers = [
    {
      name: "Dr. Christopher Brooks",
      title: "Founding Partner; Brown Venture Group",
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
      title: "FCIPS - Founder and CEO NatQuest",
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
  const handleSeeMore = () => {
    setVisibleSpeakers(speakers.length);
  };

  // Speakers

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex flex-col items-center my-20 mb-0 about-section">
      <div className="flex w-[80%] flex-col lg:flex-row">
        <div className="h-[300px] lg:h-[500px] min-w-full lg:min-w-[400px] rounded-2xl overflow-hidden about-image bg-gray-200">
          <img
            src={aboutimg}
            alt="About"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:ml-8 lg:pt-4 xl:pt-4">
          <h1 className="text-4xl lg:text-4xl xl:text-6xl font-bold text-[#35bc3d] my-4">
            About the Event
          </h1>
          <h2 className="text-lg lg:text-lg xl:text-xl font-light text-[#7b7b7b] mt-">
            {isExpanded ? fullContent : shortContent}
          </h2>
          <div className="flex mt-8">
            <button
              className="flex mr-8 sm:text-lg lg:text-2xl items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer "
              onClick={toggleExpand}
            >
              {isExpanded ? "Read Less" : "Read More"}
              <img className="h-6" src={linkarrow}></img>
            </button>
            <a href="#speakers">
              <h1 className="mr-8 sm:text-lg lg:text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer">
                The Speakers<img className="h-6" src={linkarrow}></img>
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col bg-[#35bc3d] mt-12 p-4 sm:p-8 sm:px-12">
        <div className="w-full md:w-1/3 lg:w-1/2 ml-0 lg:ml-12 md:h-[450px] flex flex-col items-start md:py-20 xl:p-20">
          <h1 className="text-[#005720] font-bold text-4xl lg:text-6xl">
            The Venue
          </h1>
          <h2 className=" text-xl lg:text-3xl font-normal text-[#95d5b2] mt-4">
            Meliá Paulista Hotel, São Paulo
          </h2>
          <a
            className="text-white mt-2 text-2xl font-light underline underline-offset-4 hover:scale-110 duration-150 origin-left"
            href="https://www.melia.com/en/hotels/brazil/sao-paulo/melia-paulista"
            target="blank"
          >
            Hotel Website
          </a>
          <a className="mt-8" href="#maps">
            <button className=" w/60 lg:w-80 p-2 px-4 bg-[#35bc3d] text-white font-semibold border-2 border-white hover:bg-transparent hover:text-[#005720] hover:border-[#005720] duration-300 mt-auto">
              Get Directions
            </button>
          </a>
        </div>
        <div className="relative h-[400px] pt-12 lg:w-1/2 md:w-2/3 w-full">
          <img
            className="absolute h-[190px] w-[320px] xl:h-[250px] xl:[500px] rounded-3xl"
            src={bluestar2}
          ></img>
          <img
            className="relative top-[150px] left-[40px] sm:top-[100px] sm:left-[120px] xl:top-[150px] xl:left-[200px] h-[200px] w-[320px] xl:h-[250px] xl:[500px] rounded-3xl"
            src={bluestar1}
          ></img>
        </div>
      </div>
      <div className="flex w-full bg-[#95d5b2] mt-12 justify-center items-center md:p-8 lg:p-4">
        <div className=" lg:w-[95%] flex flex-col items-center justify-between">
          <h1 className="text-white font-bold text-6xl lg:text-8xl my-4 text-center">
            Event Highlights
          </h1>
          <div className="flex  sm:grid-cols-2 gap-1 sm:grid md:grid-rows-auto md:grid-cols-2 lg:grid-cols-4 sm:gap-12 overflow-scroll w-[500px] lg:w-[1000px] cards">
            {eventHighlights.map((event, index) => (
              <div
                key={index}
                className="flex flex-col items-center h-[300px] min-w-[230px] w-[230px] bg-white rounded-xl p-2 m-2"
              >
                <img
                  className="h-36 w-36 mt-6"
                  src={event.img}
                  alt={event.title}
                ></img>
                <h1 className="text-xl lg:text-2xl text-center font-bold text-[#707070] mt-6">
                  {event.title}
                </h1>
              </div>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <img src={left}></img>
            <img src={right}></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 justify-center w-full px-8 items-center">
        <h1 className="text-4xl lg:text-6xl xl:text-8xl text-[#35bc3d] font-bold w-full text-center hosts my-4">
          The Hosts
        </h1>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-2 hosts-container">
          <div className="flex flex-col items-center w-full lg:w-[240px] xl:w-[300px] mt-8 my-8">
            <div className="flex h-40 w-40 sm:h-40 sm:w-40 lg:h-44 lg:w-44 xl:h-64 xl:w-64 bg-black rounded-full relative">
              <a
                href="https://www.linkedin.com/in/funmilayo-ogunsanmi-0971ab32?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <div className="absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center">
                  <img className="h-[50%]" src={linkedin}></img>
                </div>
              </a>
              <img
                className="h-full rounded-full"
                src={host1}
                alt="Host 1"
              ></img>
            </div>
            <div className="w-1/2 sm:w-full pl-4 sm:pl-0">
              <h1 className="text-center md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720]  mt-4 lg:mt-8 w-full">
                Funmilayo Ogunsanmi
              </h1>
              <h2 className="text-center text-[#35bc3d] font-light text-md lg:text-xl mt-2">
                Co-Chair AfriDES/President Hub For Digital Excellence{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-[240px] xl:w-[300px] my-8">
            <div className="flex h-40 w-40 sm:h-40 sm:w-40 lg:h-44 lg:w-44 xl:h-64 xl:w-64 bg-black rounded-full relative">
              <a
                href="https://www.linkedin.com/in/drtammyfrancis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <div className="absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center">
                  <img className="h-[50%]" src={linkedin}></img>
                </div>
              </a>
              <img
                className="h-full rounded-full"
                src={host3}
                alt="Host 2"
              ></img>
            </div>
            <div className="w-[60%] sm:w-full pr-4 sm:pr-0">
              <h1 className="w-full text-center  md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720]  mt-4 lg:mt-8 ">
                Dr. Tammy Francis
              </h1>
              <h2 className="text-center text-[#35bc3d] font-light text-md lg:text-xl mt-2">
                Co-Chair AfriDES/Co-founder Hub For Digital Excellence
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-[240px] xl:w-[300px] my-8">
            <div
              className="flex h-40 w-40 sm:h-40 sm:w-40 lg:h-44 lg:w-44 xl:h-64 xl:w-64 bg-black rounded-full relative"
              target="blank"
            >
              <a href="https://www.linkedin.com/in/kelvinjiraji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <div className="absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center">
                  <img className="h-[50%]" src={linkedin}></img>
                </div>
              </a>
              <img
                className="h-full rounded-full"
                src={host2}
                alt="Host 2"
              ></img>
            </div>
            <div className="w-[60%] sm:w-full pl-4 sm:pl-0">
              <h1 className="text-center  md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720]  mt-4 lg:mt-8 w-full">
                Kelvin Tersoo Jiraji
              </h1>
              <h2 className="text-center text-[#35bc3d] font-light text-md lg:text-xl mt-2">
                CEO Hub For Digital Excellence
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-[240px] xl:w-[300px] sm:my-8">
            <div
              className="flex h-40 w-40 sm:h-40 sm:w-40 lg:h-44 lg:w-44 xl:h-64 xl:w-64 bg-black rounded-full relative"
              target="blank"
            >
              <a href="https://www.linkedin.com/in/john-adekunjo-6757271b5/">
                <div className="absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center">
                  <img className="h-[50%]" src={linkedin}></img>
                </div>
              </a>
              <img
                className="h-full rounded-full"
                src={host4}
                alt="Host 2"
              ></img>
            </div>
            <div className="w-[50%] sm:w-full pr-4 sm:pr-0">
              <h1 className="text-center  md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720]  mt-4 lg:mt-8 w-full">
                John Adekunjo
              </h1>
              <h2 className="text-center text-[#35bc3d] font-light text-md lg:text-xl mt-2">
                Head of Digital Communication<br></br>Hub For Digital Excellence
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        id="speakers"
        className="flex flex-col mt-12 justify-center w-full p-8 items-center bg-[#005720] mb-0 sm:p-"
      >
        <h1 className="text-4xl sm:texl-6xl xl:text-7xl speakers text-white font-bold w-full sm:text-center text-center my-4">
          The Speakers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#005720] w-screen place-items-center">
          {speakers.slice(0, visibleSpeakers).map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full xl:w-[300px] mr-4 my-8"
            >
              <div className="flex h-40 w-40 sm:h-40 sm:w-40 lg:h-60 lg:w-60 xl:h-60 xl:w-60 bg-black rounded-full relative">
                <a href={speaker.linkedin} target="blank">
                  <div className="absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#35bc3d] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center">
                    <img
                      className="h-[50%]"
                      src={linkedin}
                      alt="LinkedIn"
                    ></img>
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
          <div className="flex justify-center  md:justify-end items-center  w-screen">
            {visibleSpeakers < speakers.length && (
              <div className="mt-8">
                <button
                  onClick={handleSeeMore}
                  className="text-[#35bc3d] text-2xl font-light border-2 border-[#35bc3d] p-2 hover:bg-[#35bc3d] hover:text-[#005720] duration-200 md:mr-36"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
