import React from "react";

export const PricingCard = ({
  title,
  description,
  price,
  size,
  support,
  updates,
}: {
  title: string;
  description: string;
  price: number;
  size: number;
  support: number;
  updates: number;
}) => {
  return (
    <div className="group mx-auto flex max-w-lg cursor-pointer flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow duration-300 hover:-translate-y-3 hover:shadow-primary-mainGreen xl:p-8">
      <h3 className="mb-4 text-2xl font-semibold duration-300 group-hover:text-primary-mainBlue">
        {title}
      </h3>
      <p className="font-light text-gray-500 sm:text-lg">{description}</p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-5xl font-extrabold duration-300 group-hover:text-primary-mainGreen">
          ${price}
        </span>
        <span className="text-gray-500 ">/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg
            className="h-5 w-5 flex-shrink-0 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Individual configuration</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="h-5 w-5 flex-shrink-0 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>No setup, or hidden fees</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="h-5 w-5 flex-shrink-0 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>
            Team size: <span className="font-semibold">{size} user(s).</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="h-5 w-5 flex-shrink-0 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>
            Premium support:{" "}
            <span className="font-semibold">{support} month(s)</span>
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="h-5 w-5 flex-shrink-0 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>
            Free updates:{" "}
            <span className="font-semibold">{updates} month(s)</span>
          </span>
        </li>
      </ul>
      <a
        href="#"
        className="rounded-lg  bg-primary-blue px-5 py-2.5 text-center text-sm font-medium text-white duration-300 focus:ring-4 group-hover:bg-primary-mainGreen"
      >
        Get started
      </a>
    </div>
  );
};
