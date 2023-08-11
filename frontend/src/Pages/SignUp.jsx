import React from "react";
import metaverse from "../assests/animation_lky5dmm9.json";
import Lottie from "lottie-react";
import metaversePlainAnimation from "../assests/meta.json";
import flyingMetaverseAnimation from "../assests/flying.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SignUp = () => {

  const navigate = useNavigate();

  const[user,setUser] = useState({
    username:'',
    email:'',
    phoneNumber:'',
    password:'',
  })


     

 

  async function onSignup(){

    try {

      const response = await axios.post('http://localhost:5000/signup',user);
      await toast.success("sign up done now login", {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
      });
      navigate('/signin')
      setUser({
        username:'',
        email:'',
        phoneNumber:'',
        password:''
      })
      console.log(response);
      console.log("signup done for the user");
      
    } catch (error) {

      console.log("error occured",error.message);
      
    }

  }

  return (
    <div className="md:w-full md:flex md:h-screen relative border bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 ">
      {/* first div for form card --- with 50% height and width */}
      <div className="w-[50%] px-[10%]">
        <div className=" mt-6">
          <div className=" flex flex-col bg-white gap-6 py-10 pl-16 h-[660px] rounded-lg backdrop-blur-md shadow-xl">
            <div>
              <p className="text-xl font-semibold text-gray-600">hey ! Sign-up Here.</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Name</p>
              <input
                value={user.username}
                onChange={e=>setUser({...user,username:e.target.value})}
                type=" text"
                className="border mt-2 border-gray-400 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-600 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] md:text-sm md:font-semibold md:text-[15px]
            "
              />
            </div>

            <div>
              <p className="font-semibold text-sm">Email</p>
              <input
                value={user.email}
                onChange={e=>setUser({...user,email:e.target.value})}

                type="email"
                className="border mt-2 border-gray-400 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] text-sm
            "
              />
            </div>

            <div>
              <p className="font-semibold text-sm">Phone Number</p>
              <input
                value={user.phoneNumber}
                onChange={e=>setUser({...user,phoneNumber:e.target.value})}

                type=" text"
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
                onChange={e=>setUser({...user,password:e.target.value})}

                type="password"
                className="border mt-2 border-gray-400 p-3 w-full rounded-lg
               focus:ring-blue-500 focus:border-blue-700 tracking-wide font-semibold outline-none
               focus:bg-indigo-50 md:p-2 md:w-[320px] text-sm
            "
              />
            </div>

            <div className="mt-2">
              <button
              onClick={onSignup}  
              className="md:w-[320px] py-2 px-3 bg-indigo-500 rounded-2xl shadow-xl text-white active:scale-95">
                Sign-up
              </button>
              <button className="md:w-[320px] mt-5 py-2 px-3 border border-black rounded-2xl shadow-lg text-black ">
                google
              </button>
            </div>
            <p className="text-sm">Already have an accout ? <Link to="/signin">sign-in here</Link></p>
          </div>
        </div>
      </div>

      {/* second div for animation image  */}
      <div className="w-[50%] ">
        <div>
          <Lottie
            animationData={flyingMetaverseAnimation}
            loop={true}
            className="h-[650px] ml-20"
          />
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
