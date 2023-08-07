import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import flyingMetaverseAnimation from "../assests/flying.json";
import metaversePlainAnimation from "../assests/meta.json";
import secondAnimation from "../assests/secondAnimation.json"

const SignIn = () => {
  return (
    <div className="md:w-full md:flex md:h-screen relative border bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 ">
      {/* first div for form card --- with 50% height and width */}
      <div className="w-[50%] px-[10%]">
        <div className=" mt-28">
          <div className=" flex flex-col bg-white gap-6 py-10 pl-16 h-[480px] rounded-xl backdrop-blur-md shadow-xl">
            <div>
              <p className="text-xl font-semibold text-gray-600">
                Sign-in here !
              </p>
            </div>

            <div>
              <p className="font-semibold text-sm">Email</p>
              <input
                type="email"
                className="border mt-2 border-gray-400 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] text-sm
            "
              />
            </div>

            <div>
              <p className="font-semibold text-sm">Password</p>
              <input
                type="password"
                className="border mt-2 border-gray-400 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] text-sm
            "
              />
            </div>

            <div className="mt-2">
              <button className="md:w-[320px] py-2 px-3 bg-indigo-500 rounded-2xl shadow-xl text-white">
                Sign-in
              </button>
              <button className="md:w-[320px] mt-5 py-2 px-3 border border-black rounded-2xl shadow-lg text-black">
                google
              </button>
            </div>
            <p className="text-sm">
              don't have an accout ? <Link to="/signup">sign-up here</Link>
            </p>
          </div>
        </div>
      </div>

      {/* second div for animation image  */}
      <div className="w-[50%] ">
        <div>
          <Lottie
            animationData={secondAnimation}
            loop={true}
            className="h-[650px] ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
