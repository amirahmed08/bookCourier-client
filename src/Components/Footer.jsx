import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiBookOpenTextFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A] text-gray-300 pt-14 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2 lobster-two-bold">
            <PiBookOpenTextFill className='text-2xl md:text-5xl text-[#8B5CF6]' />
            <span className="text-2xl md:text-4xl">
              Book<span className="text-purple-500">Courier</span>
            </span>
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
            Borrow your favorite books from nearby libraries and get
            them delivered directly to your doorstep quickly and safely.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 flex items-center justify-center transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {[
              "Home",
              "All Books",
              "Categories",
              "Dashboard",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-purple-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Categories
          </h3>

          <ul className="space-y-3">
            {[
              "Fiction",
              "Programming",
              "Science",
              "History",
              "Fantasy",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-purple-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-500 mt-1" />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-500" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-500" />
              <p>support@bookcourier.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500 px-6">
        © {new Date().getFullYear()} BookCourier. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;