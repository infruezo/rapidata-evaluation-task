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
      <div className="min-h-screen w-full bg-gradient-to-b from-primary-mainBlue/60 to-primary-mainGreen/60">
        <main className="w-full px-4 pt-6 md:px-6 md:pt-24 lg:pt-32">
          <div className="flex w-full flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Thanks For Your Submission !
            </h1>
            <p className="text-base font-medium text-gray-700 md:text-lg lg:text-xl">
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
