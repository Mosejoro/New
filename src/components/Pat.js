import React, { useRef, useState } from "react";
import t20 from "./media/t20.png";
import partner1 from "./media/partner6.jpg";
import partner2 from "./media/partner2.png";
import partner3 from "./media/partner3.png";
import stardust from "./media/Stardust.jpg";

const Partners = () => {
  const logos = [t20, partner1, partner2, partner3, stardust];
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 4;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full bg-white flex flex-col items-center py-12">
      <h1 className="text-[#005720] text-4xl sm:text-6xl font-bold mb-8">
        OUR PARTNERS
      </h1>
      <div
        className="logo-scroll-container"
        ref={scrollRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={drag}
      >
        <div className={`logo-scroll ${isDragging ? "dragging" : ""}`}>
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Partner ${index + 1}`} draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
