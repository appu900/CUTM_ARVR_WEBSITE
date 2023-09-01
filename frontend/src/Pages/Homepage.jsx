import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState([]);
  const isloggedIn = useSelector((state) => state.auth.userLoggedin);
  const navigate = useNavigate();


  const accecToken = ""
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${accecToken}`;
      return config
    },
    error =>{
       return Promise.reject(error)
    }
  );

  async function getUserName(){ 
    try {

      const response = await axios.get("http://localhost:5000/api/user")
      console.log(response);
      
    } catch (error) {
       console.log(error.message)
    }
  }
  


  return (
    <div>
      <div className="w-full p-4 bg-white shadow-slate-200 shadow-xl flex justify-around">
        <p className="text- font-bold">webiste Icon / name</p>
        <div className="flex gap-5">
          <p>link1</p>
          <p>link2</p>
          <p>link3</p>
        </div>
        <div>
          <p>User account link</p>
        </div>
      </div>

      <div>
        <button 
        onClick={getUserName}
        className="border border-black bg-black text-white">get data</button>
      </div>

      
    </div>
  );
};

export default Homepage;
