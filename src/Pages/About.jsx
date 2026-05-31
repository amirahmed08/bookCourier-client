import React from "react";
import {
  FaRocket,
  FaStar,
  FaRegStar,
  FaHome,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0B1026] to-[#161B3D] flex items-center justify-center p-5 overflow-hidden relative">

      {/* Floating Stars */}
      <FaStar className="absolute top-20 left-20 text-purple-400 text-xs animate-pulse" />
      <FaRegStar className="absolute top-32 right-32 text-yellow-300 text-sm animate-pulse" />
      <FaStar className="absolute bottom-24 left-40 text-white text-xs animate-pulse" />
      <FaRegStar className="absolute bottom-32 right-20 text-purple-300 text-sm animate-pulse" />

      {/* Glow Effect */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">

          {/* Rocket */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-50"></div>

              <div className="relative bg-gradient-to-r from-violet-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center">
                <FaRocket className="text-white text-4xl -rotate-45" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-3">
            Coming Soon
          </h1>

          <p className="text-center text-gray-300 mb-10">
            We're working on something amazing.
            Stay tuned for the launch.
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-3 mb-10">
            <div className="bg-white/10 rounded-xl py-4 text-center">
              <h3 className="text-2xl font-bold text-white">25</h3>
              <p className="text-xs text-gray-400 mt-1">Days</p>
            </div>

            <div className="bg-white/10 rounded-xl py-4 text-center">
              <h3 className="text-2xl font-bold text-white">10</h3>
              <p className="text-xs text-gray-400 mt-1">Hours</p>
            </div>

            <div className="bg-white/10 rounded-xl py-4 text-center">
              <h3 className="text-2xl font-bold text-white">30</h3>
              <p className="text-xs text-gray-400 mt-1">Minutes</p>
            </div>

            <div className="bg-white/10 rounded-xl py-4 text-center">
              <h3 className="text-2xl font-bold text-white">45</h3>
              <p className="text-xs text-gray-400 mt-1">Seconds</p>
            </div>
          </div>

          {/* Notify */}
          <div>
            <p className="text-gray-300 text-sm mb-3">
              Notify Me
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 shadow-lg"
              >
                <FaHome />
                Back Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaArrowLeft />
                Go Back
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;