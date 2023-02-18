import React from "react";

import headerImg from "../../../../Assets/headerImg/handshake-hands-monitor-online.jpg";

const Header = () => {
  return (
    <div>
      <div
        className="hero h-[600px] lg:w-full md:w-[700px] sm:w-[500px] "
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Get Your New Job</h1>
            <p className="mb-5">
              Find Job, Employment, and Career Opportunities
            </p>
            <div>
              <button className="btn btn-success rounded-none">Post Job</button>
              <button className="btn btn-warning rounded-none">
                Find a Job
              </button>
            </div>

            <div className="  ">
              <div className="border border-red-800 p-4 shadow-lg grid gap-8 mx-auto  grid-cols-4 h-20 bg-white w-[800px]">
                <div className=" ml-2 my-auto">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input bg-yellow-100 rounded-sm p-2 shadow-lg "
                  />
                </div>
                <div className="ml-4 my-auto">
                  <input
                    type="text"
                    placeholder="Location"
                    className="input bg-yellow-100 rounded-sm p-2 shadow-lg "
                  />
                </div>
                <div className="ml-6 my-auto">
                  <input
                    type="text"
                    placeholder="Skill"
                    className="input bg-yellow-100 rounded-sm p-2 shadow-lg "
                  />
                </div>
                <div className="ml-4">
                  <button className="btn btn-warning rounded-none">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
