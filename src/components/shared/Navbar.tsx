// Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-100 ">
      <div className="w-[1920px] max-w-full mx-auto px-4 sm:px-8 lg:px-20">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl w-52"
              >
                <li>
                  <a className="hover:text-blue-600">Home</a>
                </li>
                <li>
                  <a className="hover:text-blue-600">Shop</a>
                </li>
                <li>
                  <a className="hover:text-blue-600">About</a>
                </li>
                <li>
                  <a className="hover:text-blue-600">Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-2xl font-bold text-blue-600">
              Shoe<span className="text-gray-800">Store</span>
            </a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium">
              <li>
                <a className="hover:text-blue-600 transition">Home</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Shop</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">About</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            <a className="btn btn-primary px-6 rounded-full shadow-md hover:scale-105 transition">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
