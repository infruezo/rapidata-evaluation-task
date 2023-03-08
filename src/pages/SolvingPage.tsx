import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { IntroductionModal } from "../components/IntroductionModal";
import { CarCanvas } from "../components/CarCanvas";

export const SolvingPage = () => {
  // constants - used later for selecting a random image from the public folder
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 11;

  // useState declarations
  const [loading, setLoading] = useState(false);
  const [randomImage, setRandomImage] = useState(MIN_NUMBER);

  // component ref
  const componentRef = useRef(null);

  // get the image function / simulate call to backend api
  async function getObjectAfterDelay(): Promise<object> {
    return new Promise<object>((resolve) => {
      setTimeout(() => {
        const myObject = {
          id: "02863e47-8565-4c0d-ac39-5c3b69762fee",
          fileName: "02863e47-8565-4c0d-ac39-5c3b69762fee.png",
          target: "car",
        };
        resolve(myObject);
      }, 300);
    });
  }

  // code runs on page load
  // get the image from the api and simulate the call
  useEffect(() => {
    setLoading(true);
    const fetchPromise = getObjectAfterDelay();
    const timeOutPromise = new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    Promise.all([fetchPromise, timeOutPromise]).then(([response]) => {
      console.log(response);

      // get a random number from 1 to 11 then show that image to the user
      // hence why i renamed the files
      setRandomImage(
        Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER)
      );

      setLoading(false);
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-primary-mainBlue/60 to-primary-mainGreen/60"
      ref={componentRef}
    >
      <div className="flex h-full w-full items-center justify-center pt-6 md:pt-24 lg:pt-32">
        {/* Introduction modal */}
        {/* <IntroductionModal /> */}
        {loading ? (
          <div className="flex h-full w-full justify-center pt-48 md:pt-52 lg:pt-64">
            <img src="/assets/images/brand/loader.svg" alt="loader/svg" />
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center space-y-8 px-2 text-center text-gray-900">
              <div>
                <h3 className="text-2xl font-semibold">Get Started Now!</h3>
                <h5 className="text-lg font-medium text-gray-800">
                  Please Select The Car
                </h5>
              </div>

              <CarCanvas
                componentRef={componentRef}
                image={`/assets/images/cars/${randomImage}.jpg`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
