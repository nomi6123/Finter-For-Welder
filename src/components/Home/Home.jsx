import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div>
        {/* Main container with background */}
        <div className="relative bg-[url(/hero-bg.jpg)] bg-no-repeat bg-cover bg-center w-full min-h-screen flex justify-center items-center mb-9">
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          {/* Slider */}
          <div className="relative w-[85%] md:w-[80%] lg:w-[70%] max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {/* Slide 1 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center gap-4 px-5 py-8">
                  <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
                    We Provide <br />
                    Welding Services
                  </h2>
                  <p className="text-center text-white font-medium text-sm sm:text-base md:text-lg">
                    We are committed to delivering unparalleled welding
                    solutions that combine high-quality craftsmanship with
                    precision engineering. Our dedicated team ensures that every
                    project, no matter its complexity, meets the exacting
                    standards of our valued customers.
                  </p>
                  <button
                    className="flex items-center uppercase justify-center w-fit px-8 sm:px-10 py-2 mt-2 text-xs sm:text-sm md:text-base 
                    bg-[#2C7873] text-white text-nowrap border border-transparent font-bold 
                    hover:bg-transparent hover:text-[#2C7873] hover:border-[#2C7873] 
                    transition duration-500"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center gap-4 px-5 py-8">
                  <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center leading-tight">
                    Quality Welding <br />
                    Solutions
                  </h2>
                  <p className="text-center text-white font-medium text-sm sm:text-base md:text-lg">
                    We ensure high-quality and precision in every project,
                    meeting the demands of our valued customers.
                  </p>
                  <button
                    className="flex items-center uppercase justify-center w-fit px-8 sm:px-10 py-2 mt-2 text-xs sm:text-sm md:text-base 
                    bg-[#2C7873] text-white text-nowrap border border-transparent font-bold 
                    hover:bg-transparent hover:text-[#2C7873] hover:border-[#2C7873] 
                    transition duration-500"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
