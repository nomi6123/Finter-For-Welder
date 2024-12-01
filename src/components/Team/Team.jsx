import React from "react";
const guards = [
  { img: "/t1.jpg", name: "Martin Anderson", title: "supervisor" },
  { img: "/t2.jpg", name: "Denny Butler", title: "supervisor" },
  { img: "/t3.jpg", name: "Nathan Mcpherson", title: "supervisor" },
];
const Guards = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-16 px-4">
      <div className="flex flex-col justify-center items-center text-center h-fit mb-4 p-3 ">
        <h2 className=" text-black text-2xl md:text-4xl font-bold">Our Team</h2>
        <p className="mt-2 text-xl text-gray-800 max-w-2xl text-center">
          Our welding solutions provide reliable, personalized services to meet
          your needs wherever you are. Designed to handle any challenge, our
          team ensures precision and quality with every weld.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {guards.map((guard, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-fit bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="w-full h-[500px] bg-cover bg-center flex justify-center items-end"
              style={{ backgroundImage: `url(${guard.img})` }}
            >
              <div className="flex flex-col justify-center items-center w-full py-4 bg-gradient-to-r from-black to-blue-900  opacity-85 text-center">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  {guard.name}
                </h2>
                <div className="font-semibold text-gray-300">{guard.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guards;
