import React from "react";

export const AboutUs = () => {
  return (
    <div className="custom-container flex h-full w-full flex-col space-y-8">
      <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 ">
          About Us
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          Learn more about us and meet the team behind Rapidata.
        </p>
      </div>

      <div className="flex w-full flex-col space-y-6 lg:flex-row lg:space-y-0">
        <div className="h-full w-full flex-1 space-y-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            aut velit eaque labore quos expedita dolorum et ullam autem sint
            consequatur non sapiente asperiores, vel debitis quas ipsam.
            Quaerat, incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            aperiam veritatis, debitis laudantium molestiae, hic, deserunt sunt
            aliquam vel qui dolores asperiores cupiditate incidunt? Nemo
            quibusdam veniam asperiores! Facilis, nihil. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolores harum nemo, ullam eos
            nesciunt cum vel! Recusandae laudantium vel, illum, earum itaque
            vero obcaecati laborum quibusdam, culpa odit enim doloribus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            repellat quibusdam, nesciunt dolore dolores rerum quidem nostrum
            repellendus deleniti accusamus praesentium nihil asperiores
            consequuntur laborum qui, atque iste doloremque dolor?
          </p>
          <div>
            <button type="button" className="button-v1 px-6 py-3">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex h-full w-full flex-1 items-center justify-center">
          <img
            src="https://rapidata.ai/_next/image?url=%2FTeam.jpeg&w=1200&q=75"
            alt="aboutus/png"
            className="h-96 w-auto rounded-md object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
