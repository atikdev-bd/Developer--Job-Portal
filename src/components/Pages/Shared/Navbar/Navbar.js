import React, { useContext } from "react";
import { Link } from "react-router-dom";

import titleIcon from "../../../../Assets/titleIcon/icons8-new-job-50.png";
import { FaSignOutAlt } from "react-icons/fa";

import "./Navbar.css";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className=" navbar font-semibold bg-gradient-to-r from-indigo-500">
      <div className="flex-1">
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        </label>
        <Link to="/">
          {" "}
          <img className="w-10 mb-2 ml-2 title-icon" src={titleIcon} alt="" />
        </Link>
        <Link to="/" className="flex items-center ml-2 hover:text-white">
          <span className="text-4xl font-bold">J</span>
          <span className="text-xl font-bold">ob</span>
          <span className="text-4xl"> -W</span>
          <span className="text-xl"> -w</span>
        </Link>
      </div>
      <div className="link-div mr-28  font-bold hidden lg:block">
        {user?.uid ? (
          <>
            {" "}
            <div className="flex">
              <div>
                <Link to="/" className="mr-3">
                  Home
                </Link>
                <Link to="/about" className="mr-3 hover:text-blue-900">
                  About
                </Link>
                <Link to="/contact" className="mr-3 hover:text-yellow-700">
                  Contact Us
                </Link>
              </div>
              <div className="ml-36 mt-1">
                <FaSignOutAlt
                    onClick={logOut}
                    className="hover:text-stone-400"
                  ></FaSignOutAlt>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="mr-3">
              Home
            </Link>
            <Link to="/about" className="mr-3 hover:text-blue-900">
              About
            </Link>
            <Link to="/login" className="mr-3 hover:text-sky-700">
              Login
            </Link>
            <Link to="/register" className="mr-3 hover:text-green-500">
              Register
            </Link>
          </>
        )}
      </div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div title={"user"?.displayName} className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={"user"?.photoURL} alt="" />
              ) : (
                <img src={"ProfileIcon"} alt="" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <div className="lg:hidden block">
              {user?.uid ? (
                <>
                  {" "}
                  <li>
                    <Link to="/" className="mr-3">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="mr-3 hover:text-yellow-700">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="mr-3 hover:text-blue-900">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={logOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    {" "}
                    <Link to="/" className="mr-3">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" className="mr-3 hover:text-blue-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="mr-3 hover:text-blue-900">
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/login" className="mr-3 hover:text-sky-700">
                      Login
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="/register" className="mr-3 hover:text-green-500">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </div>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
