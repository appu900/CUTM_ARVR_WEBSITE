import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import flyingMetaverseAnimation from "../assests/flying.json";
import metaversePlainAnimation from "../assests/meta.json";
import secondAnimation from "../assests/secondAnimation.json";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const [loding, setLoding] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // experiment code

 

  const onSignIn = async () => {
    try {
      setLoding(true);
      const response = await axios.post("http://localhost:5000/signin", user);
      console.log(response.status);
      dispatch(login());
      await toast.success("wooo welcome !", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
      });
      setLoding(false);
      navigate("/");
      setUser({
        email: "",
        password: "",
      });
    } catch (error) {
      let err = error.message;
      console.log(err);
      await toast.error("invalid email or password", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setLoding(false);
    }
  };

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
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                className="border mt-2 border-gray-400 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] text-sm
            "
              />
            </div>

            <div className="mt-2">
              <button
                onClick={onSignIn}
                className="md:w-[320px] py-2 px-3 bg-indigo-500 rounded-2xl shadow-xl text-white active:scale-95"
              >
                {loding == true ? "wait a second" : "sign-in"}
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
