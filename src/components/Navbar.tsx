import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-[80px] w-full border-b border-gray-50 bg-white shadow-sm">
      <div className="custom-container flex h-full items-center justify-between">
        {/* left side */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/assets/images/brand/logo_with_name.svg"
              alt="logo/svg"
              className="h-8 w-auto object-contain lg:h-10"
            />
          </Link>
        </div>

        {/* right side | desktop screens */}
        <div className="hidden items-center space-x-6 lg:flex">
          {/* links */}
          <ul className=" flex items-center space-x-8 border-r border-primary-blue pr-6 text-base font-medium text-gray-900 lg:text-lg">
            <Link to="/" className="link-v1">
              Home
            </Link>
            <li className="link-v1">About Us</li>
            <li className="link-v1">Our Offers</li>
            <li className="link-v1">Pricing</li>
          </ul>

          {/* language selector */}
          <div className="flex items-center space-x-4 pl-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                />
              </svg>

              <select name="" id="" className="text-gray-900 outline-none">
                <option value="">English</option>
                <option value="">French</option>
                <option value="">中国人</option>
              </select>
            </div>
          </div>

          {/* Free Demo */}
          <button type="button" className="button-v1">
            <Link to="/prepare">Free Demo</Link>
          </button>

          {/* register */}
          <button type="button" className="button-v2">
            Register
          </button>
        </div>

        {/* right side | mobile screens */}
        <div className="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 cursor-pointer fill-current text-primary-blue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};
