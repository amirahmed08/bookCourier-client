import React from "react";
import {
  FaBookOpen,
  FaMapMarkerAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
import bannerImage from "../../assets/booksbanner.png";

const Banner = () => {
  return (
    <section className="bg-[#0B1023] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 left-0 w-48 md:w-72 h-48 md:h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-20 lg:py-28 relative z-10">
        {/* Hero */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Books, Delivered <br />
              <span className="text-purple-500">
                To Your Doorstep
              </span>
            </h1>

            <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Borrow books from nearby libraries and get them delivered
              directly to your home quickly and safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg">
                Explore Books
              </button>

              <button className="border border-white/20 hover:border-purple-500 hover:bg-white/5 transition px-6 py-3 rounded-xl font-semibold">
                Become a Librarian
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-60 sm:w-80 md:w-90 h-50 sm:h-70 md:h-96 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full blur-3xl opacity-40"></div>

            <div className="relative">
              <img
                src={bannerImage}
                alt="Books"
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
              />

              <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 bg-purple-600 px-4 py-2 rounded-2xl shadow-xl">
                <p className="text-xs text-gray-200">
                  Happy Readers
                </p>
                <h3 className="text-lg sm:text-2xl font-bold">
                  500+
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 lg:mt-24">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <FaBookOpen className="text-purple-400 text-3xl md:text-4xl" />
            <div>
              <h3 className="font-bold text-2xl">1,000+</h3>
              <p className="text-gray-400 text-sm">
                Books Available
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-400 text-3xl md:text-4xl" />
            <div>
              <h3 className="font-bold text-2xl">20+</h3>
              <p className="text-gray-400 text-sm">
                Cities Covered
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <FaShippingFast className="text-cyan-400 text-3xl md:text-4xl" />
            <div>
              <h3 className="font-bold text-2xl">Fast</h3>
              <p className="text-gray-400 text-sm">
                Delivery
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <FaHeadset className="text-green-400 text-3xl md:text-4xl" />
            <div>
              <h3 className="font-bold text-2xl">24/7</h3>
              <p className="text-gray-400 text-sm">
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;