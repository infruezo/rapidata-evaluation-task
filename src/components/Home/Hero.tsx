import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero-section h-full w-full bg-gradient-to-br from-primary-mainBlue to-primary-mainGreen">
      <div className="custom-container flex h-full flex-col justify-between md:flex-row">
        {/* text */}
        <div className="flex h-full max-w-xl flex-col justify-center space-y-6 text-center text-primary-white md:text-start">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-black/80 to-blue-900 bg-clip-text text-transparent">
              Rapidata.ai
            </span>
          </h1>
          <h5 className="text-xl font-medium md:text-2xl lg:text-3xl">
            The Leading And Reliable Datalabeling for your AI.
          </h5>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vero nostrum, libero ipsa fugiat optio non quia magni sed, fuga
            voluptatibus quasi suscipit adipisci natus dolor animi eius
            consequuntur dolores.
          </h5>

          <button className="mx-auto w-fit rounded-lg bg-primary-white py-3 px-8 text-center font-bold text-primary-mainBlue shadow-lg duration-300 active:scale-110 md:mx-0">
            <Link to="/demo">FREE DEMO</Link>
          </button>
        </div>

        {/* hero image */}
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="https://rapidata.ai/Hero_cropped.png"
            className="h-72 w-auto min-w-[450px] object-cover lg:h-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
