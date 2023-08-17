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

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      console.log("getting data from server done");
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button onClick={getData}>click me</button>
    </div>
  );
};

export default Homepage;
