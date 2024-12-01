
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "10",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-full min-h-scre flex flex-col items-center justify-center py-16 px-4">
        <div className="flex flex-col justify-center items-center text-center h-fit mb-10 p-3 ">
          <h2 className="text-black text-2xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-2 text-xl text-gray-800 max-w-2xl text-center">
            Our welding solutions deliver reliable, tailored services to meet
            your needs, no matter where you are. Built to tackle any challenge,
            our team guarantees precision and top-notch quality in every weld.
          </p>
        </div>

        {/* Slider Component */}
        <Slider
          {...settings}
          className="w-full flex justify-center items-center overflow-hidden"
        >
          {[
            {
              title: "Home Welding",
              description:
                "Expert, reliable welding services tailored for home repairs and custom projects, ensuring precision and quality every time.",
              image: "/s1.png",
            },
            {
              title: "Commercial Welding",
              description:
                "Providing durable and high-quality welding services for commercial and industrial needs, ensuring strong and reliable structures.",
              image: "/s2.png",
            },
            {
              title: "Automotive Welding",
              description:
                "Specializing in welding for vehicles, from frame repairs to custom modifications, with precision and attention to detail.",
              image: "/s3.png",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="service-card bg-white hover:bg-gradient-to-r from-black
               to-blue-900 hover:scale-105 hover:text-white shadow-xl
                shadow-blue-500 py-4 px-6 w-[30%] sm:w-[30%] md:w-[30%] 
                flex flex-col justify-center items-center mx-2  transition-transform duration-300 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 filter invert contrast-50 m-auto mb-1"
              />
              <h2 className="font-bold text-2xl mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-center text-[17px]">{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
