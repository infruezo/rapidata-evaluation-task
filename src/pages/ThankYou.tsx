import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

export const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    try {
      const { success } = location.state;
      if (success) setHasAccess(true);
    } catch (err) {
      return navigate("/");
    }
  }, []);

  return (
    hasAccess && (
      <div className="min-h-screen w-full bg-gradient-to-b from-primary-mainBlue/40 to-primary-mainBlue/10">
        <Navbar />

        <main className="mt-6 w-full px-4 md:mt-24 md:px-6 lg:mt-32">
          <div className="flex w-full flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Thanks For Your Submission !
            </h1>
            <p className="text-base font-medium text-gray-500 md:text-lg lg:text-xl">
              Hope you enjoyed this small demo of our app.
            </p>
            <img
              src="/assets/images/brand/thankyou.svg"
              className="h-auto w-10/12 object-cover lg:h-auto lg:w-auto"
              alt="thanks/svg"
            />
          </div>
        </main>
      </div>
    )
  );
};
