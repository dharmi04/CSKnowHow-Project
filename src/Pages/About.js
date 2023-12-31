import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const About = () => {
  const slides = [
    { url: process.env.PUBLIC_URL + '/background.jpg' },
    { url: process.env.PUBLIC_URL + '/about.jpg' },
    { url: process.env.PUBLIC_URL + '/gre.jpg' },
    { url: process.env.PUBLIC_URL + '/news.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide =()=>{
    const isFirstSlide= currentIndex===0;
    const newIndex = isFirstSlide ? slides.length -1: currentIndex-1;
    setCurrentIndex(newIndex);
  }
  const nextSlide =()=>{
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex= isLastSlide ? 0: currentIndex+1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${currentIndex.url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
        {/* left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide}  size={30} />
        </div>
      </div>
    </div>
  );
};

export default About;
