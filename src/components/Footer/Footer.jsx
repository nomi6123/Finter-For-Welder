import { PiMapPinFill } from "react-icons/pi";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" pb-3">
      <div
        className="bg-gradient-to-r from-black to-blue-900 p-10 md:p-[60px] py-10 
      w-full mx-auto max-w-[1400px] flex max-xl:flex-wrap 
      justify-center items-center gap-8 text-white"
      >
        {/* Gurder Section */}
        <div className="text-white w-full md:w-1/2 lg:w-[25%] px-2 flex flex-col gap-6">
          <h2 className="font-bold text-3xl">Finter</h2>
          <p className="font-semibold">
            Your satisfaction is our top priority. We’re here to provide expert
            welding solutions, ensuring precision, durability, and unmatched
            quality. Rely on us for reliable craftsmanship and steadfast support
            every step of the way.
          </p>
        </div>

        {/* Useful Link Section */}
        <div className="text-white w-full md:w-1/2 lg:w-[25%] px-2 flex flex-col gap-6">
          <h2 className="font-semibold text-2xl">Useful Link</h2>
          <p className="font-semibold">
            Your success is our mission. We deliver top-notch welding solutions,
            combining expertise and innovation to ensure strength and
            reliability. Trust us to handle your welding needs with precision
            and unwavering commitment.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex w-full md:w-1/2 lg:w-[20%] px-2 flex-col gap-6 ">
          <h2 className="font-semibold text-2xl">Contact Us</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <PiMapPinFill className="text-xl hover:text-[#0A132F]transition-transform duration-300 transform hover:scale-110" />
              <h4>Lohare Panjab Pakistan</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg hover:text-[#0A132F] transition-transform duration-300 transform hover:scale-110" />
              <h4>Call: +033229999766</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg hover:text-[#0A132F] transition-transform duration-300 transform hover:scale-110" />
              <h4>demo@gamil.com</h4>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-white w-full md:w-1/2 lg:w-[25%] px-2 flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">Newsletter</h2>
          <div className="flex flex-col">
            <input
              type="text"
              x
              placeholder="Enter your Email"
              className="p-[10px] pr-5 rounded-lg w-full outline-none placeholder:text-black text-black"
            />
            <button
              className="flex items-center uppercase justify-center w-fit px-10 py-2 rounded-lg mt-2 text-sm md:text-base lg:text-lg 
                bg-[#0A132F] text-white border border-transparent font-bold 
                hover:bg-transparent hover:text-[#161d31] hover:border-[#0A132F] 
                transition duration-500"
            >
              Subscribe
            </button>
            <div className="flex mt-3 items-center gap-4">
              <FaFacebook className="text-2xl hover:text-[#0A132F] transition-transform duration-300 transform hover:scale-110" />
              <FaTwitter className="text-2xl hover:text-[#0A132F] transition-transform duration-300 transform hover:scale-110" />
              <FaYoutube className="text-2xl hover:text-[#0A132F] transition-transform duration-300 transform hover:scale-110" />
              <FaInstagram className="text-2xl hover:text-[#0A132F] transition-transform duration-300 transform hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text- text-[16pxblack] mt-5 mb-5">
        © 2024 All Rights Reserved. Design by Front-end developer Noman Khan.
      </p>
    </div>
  );
};

export default Footer;
