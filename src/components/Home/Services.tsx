import React from "react";

export const Services = () => {
  return (
    <div className="custom-container flex h-full w-full flex-col space-y-8">
      <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Our Services
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Join Leading businesses that are already thriving with Rapidata. Get
          Started below and turn your ideas into reality.
        </p>
      </div>

      <img
        src="/assets/images/brand/world_map.svg"
        alt="world_map/svg"
        className="rounded-md object-cover shadow-sm"
      />
    </div>
  );
};
