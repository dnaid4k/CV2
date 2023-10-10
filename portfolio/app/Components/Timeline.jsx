import React, { useState } from 'react';
import { TimeLineData } from '../constants/constants';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleNext = () => {
    if (activeItem < TimeLineData.length - 1) {
      setActiveItem(activeItem + 1);
    }
  }

  const handlePrev = () => {
    if (activeItem > 0) {
      setActiveItem(activeItem - 1);
    }
  }

  return (
    <section id="about" className="bg-[#0f0f0f] mt-15">
      <div className="container mx-auto py-8 px-4 md:py-12 md:px-8">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center">My Journey</h2>
        
        <div className="bg-gradient-to-r from-green-800  to-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-center">
            {TimeLineData[activeItem].year}
          </h3>
          <p className="text-white text-base md:text-lg max-w-xs md:max-w-md mx-auto md:text-center">
            {TimeLineData[activeItem].text}
          </p>
        </div>
        {/* Navigation buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            className={`w-12 h-12 bg-gray-600 text-white rounded-full focus:outline-none ${
              activeItem === 0 ? 'hidden' : ''
            }`}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className={`w-12 h-12 bg-gray-600 text-white rounded-full focus:outline-none ${
              activeItem === TimeLineData.length - 1 ? 'hidden' : activeItem === 0 ? 'ml-auto' : ''
            }`}
          >
            &gt;
          </button>
        </div>
        {/* Navigation dots */}
        <div className="flex justify-center mt-8">
          {TimeLineData.map((item, index) => (
            <span
              key={index}
              onClick={() => setActiveItem(index)}
              className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
                activeItem === index ? 'bg-black' : 'bg-gray-600'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;