import React from "react";
import mubin from "../img/mubin.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="pt-10 shadow-md h-screen bg-white fixed lg:px-10 z-10">
      <div className="h-full p-3 space-y-2 w-60 flex flex-col">
        <div className="flex items-center p-2 space-x-4">
          <img src={mubin} alt="" className="w-12 h-12 rounded-full " />
          <div>
            <h2 className="text-lg font-semibold">mubin_mhd</h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline "
              >
                Mukhammad Nur Mubin
              </a>
            </span>
          </div>
        </div>
        <div className="divide-y ">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <Link to="/">
              <li className="hover:bg-[#edf2f7] rounded-lg text-gray-500 transform hover:translate-x-4 transition duration-300">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Dashboard</span>
                </a>
              </li>
            </Link>
            <Link to="/Project">
              <li className="hover:bg-[#edf2f7] rounded-lg text-gray-500 transform hover:translate-x-4 transition duration-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <span>Project</span>
                </a>
              </li>
            </Link>
            <Link to="/Blog">
              <li className="hover:bg-[#edf2f7] rounded-lg text-gray-500 transform hover:translate-x-4 transition duration-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Blog</span>
                </a>
              </li>
            </Link>
            <Link to="/Contact">
              <li className="hover:bg-[#edf2f7] rounded-lg text-gray-500 transform hover:translate-x-4 transition duration-300">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Contact</span>
                </a>
              </li>
            </Link>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li className="hover:bg-[#edf2f7] rounded-lg text-gray-500 transform hover:translate-x-4 transition duration-300">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-6 h-6"
                >
                  <path
                    fill="#6FDA44"
                    fillRule="evenodd"
                    d="M12.374 8.774c-.735 0-1.424-.311-2.05-.818l.152-.717.005-.028c.138-.762.566-2.04 1.893-2.04.994 0 1.802.808 1.802 1.802 0 .993-.808 1.801-1.802 1.801zm0-5.427c-1.693 0-3.007 1.1-3.54 2.911-.813-1.223-1.432-2.691-1.791-3.928H5.219v4.742A1.7 1.7 0 0 1 3.521 8.77a1.7 1.7 0 0 1-1.697-1.698V2.33H0v4.742c0 1.942 1.58 3.535 3.521 3.535 1.942 0 3.522-1.593 3.522-3.535v-.794c.353.738.788 1.486 1.316 2.147l-1.116 5.249h1.865l.809-3.807c.708.453 1.523.74 2.457.74 2 0 3.626-1.635 3.626-3.634 0-2-1.626-3.626-3.626-3.626z"
                  />
                </svg>
                <span>Hire me on Upwork</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="self-start mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
