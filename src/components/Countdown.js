import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-21T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className="text-4xl sm:text-6xl font-bold text-[#95d5b2] bg-[#005720] p-3 rounded-lg">
          {timeLeft[interval]}
        </span>
        {/* Number color: change 'text-accent' to your desired color */}
        <span className="text-lg text-[#005720]">{interval}</span>
        {/* Text color: change 'text-white' to your desired color */}
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center bg-[#35bc3d] p-6 py-16 shadow-lg">
      <h2 className="text-3xl font-bold text-[#005720] mb-4 text-center">
        Countdown to Conference
      </h2>
      {/* Title color: change 'text-primary' to your desired color */}
      <div className="flex justify-center items-center space-x-4">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="text-3xl font-bold text-primary mb-4 text-center">
            Time's up!
          </span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
