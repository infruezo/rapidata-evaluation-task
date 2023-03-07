import React, { useState } from "react";

export const IntroductionModal = () => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  return (
    <>
      {visible ? (
        <>
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 outline-none focus:outline-none "
            id="modal"
          >
            <div className="animate-popup relative my-6 mx-auto w-full px-2 lg:w-[600px] lg:px-0">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-primary-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-lg font-bold lg:text-2xl">
                    Select the car like the GIF below.
                  </h3>
                  <button
                    className="float-right ml-auto border-0 p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={() => setVisible(false)}
                  >
                    <span className="text-red-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 fill-current text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/*body*/}

                {step === 0 && (
                  <>
                    <div className="relative flex w-full flex-col">
                      <img
                        src="/assets/images/gifs/introduction.gif"
                        alt="introduction/gif"
                        className="h-80 w-full object-cover"
                      />

                      <div className="flex h-auto w-full flex-col space-y-1 p-4 font-medium">
                        <p>
                          A Random image of a car will appear after you close
                          this popup.
                        </p>
                        <p>Try to circle the car as closely as possible</p>
                        <p>
                          Dont forget to check your answer before submitting!
                        </p>
                      </div>
                    </div>
                    <div className="border-primary-smokehouseDarkRed/25 flex items-center justify-end space-x-4 rounded-b border-t border-solid p-6">
                      <button
                        className="button-v2"
                        type="button"
                        onClick={() => setVisible(false)}
                      >
                        Skip
                      </button>
                      <button
                        className="button-v1"
                        type="button"
                        onClick={() => setStep(1)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="relative flex w-full flex-col">
                      <img
                        src="/assets/images/gifs/introduction.gif"
                        alt="introduction/gif"
                        className="h-80 w-full object-cover"
                      />

                      <div className="flex h-auto w-full flex-col space-y-1 p-4 font-medium">
                        <p>
                          Don't forget, you can redo this anytime even if you
                          mess up!
                        </p>
                        <p>
                          However don't take too long, you only have 30 seconds.
                        </p>
                        <p>Good luck!</p>
                      </div>
                    </div>
                    <div className="border-primary-smokehouseDarkRed/25 flex items-center justify-end space-x-4 rounded-b border-t border-solid p-6">
                      <button
                        className="button-v1"
                        type="button"
                        onClick={() => setVisible(false)}
                      >
                        I Understand.
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
