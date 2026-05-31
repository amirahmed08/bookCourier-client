import React from "react";
import { Link } from "react-router";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-purple-600/30 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative z-10 text-center max-w-xl">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-none drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

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
  );
};

export default ErrorPage;