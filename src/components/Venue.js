import React from "react";

import venue from "./media/hilton.png";
import phone from "./media/phone.png";
import email from "./media/email.png";

import bluestar2 from "./media/venue.jpg";

const Venue = () => {
  return (
    <div className="w-full flex p-8">
      <div className="flex flex-col md:w-80 lg:w-[400px]">
        <h1 className="text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-[#35bc3d] font-bold">
          The Venue
        </h1>
        <h3 className="sm:text-xl md:text-lg lg:text-xl text-[#005720] font-light">
          Meliá Paulista Hotel, São Paulo
        </h3>
        <img className="w-80 md:h-48 my-4" src={bluestar2}></img>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.289410925462!2d-46.66351672592177!3d-23.558047061468113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d117d184f61%3A0x393ce9bc90594440!2sMeli%C3%A1%20Paulista!5e0!3m2!1sen!2sng!4v1723052980100!5m2!1sen!2sng"
          width="800"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="md:w-[360px] md:h-[320px] md:hidden m-auto my-4"
        ></iframe>
        <h1 className="text-4xl text-[#005720] font-bold mt-auto">
          Get In Touch
        </h1>
        <div className="flex items-center mt-6">
          <img className="h-4 mr-2" src={phone}></img>
          <h1 className="md:text-lg lg:text-xl font-light color-[#1a1a1a]">
            +2347035652264
          </h1>
        </div>
        <div className="flex items-center">
          <img className="h-4 mr-2" src={phone}></img>
          <h1 className="md:text-lg lg:text-xl font-light color-[#1a1a1a]">
            +1(202)500-3323
          </h1>
        </div>
        <div className="flex items-center">
          <img className="h-4 mr-2" src={email}></img>
          <h1 className="md:text-lg lg:text-xl font-light color-[#1a1a1a]">
            {" "}
            afrides@hubfordigitalexcellence.com
          </h1>
        </div>
        <a href="https://hubfordigitalexcellence.com/">
          <h1 className="mt-2 text-[#005720] text-xl font-bold">
            Powered by:{" "}
            <span className="underline">Hub For Digital Excellence</span>
          </h1>
        </a>
        <div className="flex gap-7 mt-6">
          <div className="flex items-center">
            <a href="https://x.com/HFDE_Official" role="button">
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61560637558374&mibextid=ZbWKwL"
              role="button"
            >
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://www.instagram.com/hfde_official" role="button">
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/company/hub-for-digital-excellence/"
              role="button"
            >
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <h2 className="mt-9 mb-0">
          Copyright © 2024 Africa Digital Economy Summit.
        </h2>
        <br />
      </div>
      <div
        id="maps"
        className="flex justify-center items-center md:ml-8 lg:ml-20 w-1/2"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.289410925462!2d-46.66351672592177!3d-23.558047061468113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d117d184f61%3A0x393ce9bc90594440!2sMeli%C3%A1%20Paulista!5e0!3m2!1sen!2sng!4v1723052980100!5m2!1sen!2sng"
          width="800"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="hidden md:block md:w-[360px] md:h-[320px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Venue;
