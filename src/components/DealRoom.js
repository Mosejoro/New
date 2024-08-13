import React from "react";

const DealRoom = () => {
  return (
    <div className="w-full dealroom p-4 px-8 sm:p-12 sm:px-16">
      <h1 className="text-4xl sm:text-5xl text-white font-bold">
        Welcome to the AfriDES Deal Room
      </h1>
      <h1 className="text-white text-md sm:text-xl mt-8">
        Step into the AfriDES Deal Room, where visionaries meet opportunities.
        This exclusive environment is dedicated to facilitating high-impact
        interactions between investors and entrepreneurs.
        <br />
        <br />
        Here, connections turn into collaborations and conversations lead to
        investments. Entrepreneurs, pitch your ventures to potential backers who
        are eager to support disruptive technologies and visionary projects.
        Investors, explore a curated selection of promising startups with the
        potential to reshape industries and drive digital transformation across
        Africa.
        <br />
        <br />
        The AfriDES Deal Room is more than just a space; it's where the future
        of the digital economy is being written. Join us to network, negotiate,
        and make deals that will catalyze growth and success. Let's create the
        future together.
      </h1>
      <button className="border-2 border-white bg-none text-white font-bold p-4 px-6 text-xl sm:text-2xl mt-12">
        Learn More
      </button>
    </div>
  );
};

export default DealRoom;
