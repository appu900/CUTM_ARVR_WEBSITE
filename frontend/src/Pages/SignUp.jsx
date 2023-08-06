import React from "react";
import metaverse from "../assests/animation_lky5dmm9.json"
import Lottie from "lottie-react";
import metaversePlainAnimation from "../assests/meta.json"
import flyingMetaverseAnimation from "../assests/flying.json"

const SignUp = () => {
  return (
    <div className="h-screen md:max-h-screen p-10
    md:flex md:items-center md:p-0 
    ">
      {/* this div will act as the main div for mobile screen and it wll convert to 50% flex width in md+ screen */}
      <div className=" w-full h-full md:w-[40%]  md:pl-[9%]  ">
        <div className="mt-2 md:mt-24 text-left">
          <p className="text-xl font-bold text-gray-600">
            {" "}
            Hey buddy ! Sign-up here
          </p>
        </div>

        {/* main from section */}
        <div className="mt-8 flex flex-col gap-6">
          <div>
            <p className="font-semibold text-sm">Name</p>
            <input
              type=" text"
              className="border mt-2 border-gray-600 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-600 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] md:text-sm md:font-semibold md:text-[15px]
            "
            />
          </div>

          <div>
            <p className="font-semibold text-sm">Email</p>
            <input
              type="email"
              className="border mt-2 border-gray-600 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px]
            "
            />
          </div>

          <div>
            <p className="font-semibold text-sm">Reg. Number</p>
            <input
              type=" text"
              className="border mt-2 border-gray-600 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px]
            "
            />
          </div>

          <div>
            <p className="font-semibold text-sm">Password</p>
            <input
              type="password"
              className="border mt-2 border-gray-600 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px]
            "
            />
          </div>

        

          <div>
            <button className="px-3 shadow-lg py-3 bg-[#6260E8] w-full md:w-[320px] rounded text-white font-semibold">
              Sign-up
            </button>
          </div>
        </div>
        <p className="mt-2">Already have an account ? sign in here</p>
      </div>

      <div className="hidden md:relative md:block  md:w-[60%] md:h-full p-4 md:rounded-3xl  md:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 ">
        <div className="md:w-full md:h-full md:rounded-md  mt-3">
        <Lottie animationData={flyingMetaverseAnimation} loop={true} className="h-[650px]" />
        </div>

        

      </div>
    </div>
  );
};

export default SignUp;

// Name
// email
// registration number
// password
// confirm password
