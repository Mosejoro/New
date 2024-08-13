import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Landing from "./components/Landing.js";
import Icons from "./components/Icons.js";
import About from "./components/About.js";
import Partners from "./components/Partners.js";
import Dealroom from "./components/DealRoom.js";
import Countdown from "./components/Countdown.js";
import Tickets from "./components/Tickets.js";
import FAQ from "./components/FAQ.js";
import Venue from "./components/Venue.js";
import Speakers from "./components/Speakers.js";
import Pat from "./components/Pat.js";

const Homepage = () => {
  const ticketsRef = useRef(null);

  const scrollToTickets = () => {
    ticketsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Icons />
      <Navbar />
      <Landing scrollToTickets={scrollToTickets} />
      <About />
      <Dealroom />
      <Pat />
      <Countdown />
      <div ref={ticketsRef}>
        <Tickets />
      </div>
      <FAQ />
      <Venue />
    </>
  );
};

export default Homepage;
