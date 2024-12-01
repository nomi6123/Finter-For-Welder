import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-[90vh] bg-white flex flex-col gap-3 lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
      {/* Text Section */}
      <div
        className="w-full lg:w-1/2 bg-white flex flex-col gap-4 px-6 py-4 shadow-md shadow-slate-700 
        transition-transform duration-300 ease-in-out hover:scale-95 
        hover:bg-gradient-to-r from-black to-blue-900 hover:text-white"
      >
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center lg:text-left">
          About Us
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify lg:text-left">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words. There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button
            className="flex items-center uppercase justify-center w-fit px-8 sm:px-10 py-2 mt-2 text-xs sm:text-sm md:text-base 
                      bg-[#2C7873] text-white text-nowrap border border-transparent font-bold 
                      hover:bg-transparent hover:text-[#2C7873] hover:border-[#2C7873] 
                      transition duration-500"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center items-center transition-transform duration-300 ease-in-out
           hover:scale-95">
        <img
          src="/about-img.jpg"
          alt="About us"
          className="w-full h-auto object-cover   md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%]"
        />
      </div>
    </div>
  );
};

export default About;
