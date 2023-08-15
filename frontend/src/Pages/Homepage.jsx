import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const isloggedIn = useSelector((state) => state.auth.userLoggedin);
  const navigate = useNavigate();

  function checkUserAuthorization() {
    if (isloggedIn == false) {
      navigate("/signin");
    }
  }

  useEffect(() => {
    // checkUserAuthorization();
  }, []);

  return <div>Homepage</div>;
};

export default Homepage;
