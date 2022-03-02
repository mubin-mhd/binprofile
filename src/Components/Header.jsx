import react, { Fragment } from "react";
import { Link } from "react-router-dom";

function navMenu() {
  const navlist = document.getElementById("listMenu");
  const hireMe = document.getElementById("hireMe");
  navlist.classList.toggle("hidden");
  hireMe.classList.toggle("hidden");
}

const Header = () => {
  return (
    <Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        {/* nav brand */}
        <div className="flex items-center flex-shrink-0 text-gray-100 mr-6">
          <Link to="/">
            <span className="font-semibold text-xl tracking-tight">
              Mubin_Mhd
            </span>
          </Link>
        </div>
        {/* nav brand */}

        {/* nav hamburger menu */}
        <div className="block lg:hidden">
          <button
            onClick={navMenu}
            className="flex items-center px-3 py-2 border rounded hover:text-yellow-400 hover:border-yellow-200 text-white border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* nav hamburger menu */}

        {/* nav list menu */}
        <div
          id="listMenu"
          className="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:text-center transition-all duration-700"
        >
          <div className="text-sm lg:flex-grow">
            <Link to="/">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:text-white mr-4"
              >
                Dashboard
              </a>
            </Link>
            <Link to="/Project">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:text-white mr-4"
              >
                Project
              </a>
            </Link>
            <Link to="/Blog">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:text-white mr-4"
              >
                Blog
              </a>
            </Link>
            <Link to="/Contact">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:text-white"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>

        {/* nav list menu */}

        {/* nav download */}
        <div id="hireMe" className="hidden lg:inline">
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
          >
            Hire me on Upwork
          </a>
        </div>
        {/* nav download */}
      </nav>
    </Fragment>
  );
};

export default Header;
