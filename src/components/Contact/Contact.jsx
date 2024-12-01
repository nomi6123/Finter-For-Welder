
const Contact = () => {
  return (
    <div className="flex flex-col mb-5 lg:flex-row w-full min-h-screen justify-center items-center bg-gray-50">
      {/* Responsive Image Section */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[700px] lg:h-auto flex-shrink-0">
        <img
          src="/contact-img.jpg"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-8">
        <section
          aria-labelledby="contact-section"
          className="w-full max-w-xl flex flex-col items-center"
        >
          <h2
            id="contact-section"
            className="text-black text-2xl md:text-3xl font-bold mb-6 tracking-tight"
          >
            Get In Touch
          </h2>

          <form className="w-full flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 bg-white border outline-none border-gray-300 rounded text-black placeholder-gray-500 text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 bg-white border outline-none border-gray-300 rounded text-black placeholder-gray-500 text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Phone number"
              required
              className="p-3 bg-white border outline-none border-gray-300 rounded text-black placeholder-gray-500 text-sm md:text-base"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              className="p-3 bg-white border outline-none border-gray-300 rounded text-black placeholder-gray-500 text-sm md:text-base"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 mt-2 text-sm md:text-base lg:text-lg bg-blue-900 text-white font-semibold rounded 
                hover:bg-transparent hover:text-blue-900 hover:border hover:border-blue-900 transition duration-300"
            >
              SEND
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
