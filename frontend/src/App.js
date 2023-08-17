import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SignIn from "./Pages/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/authSlice";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const isloggedIn = useSelector((state) => state.auth.userLoggedin);

  const dispatch = useDispatch();

  

  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={isloggedIn == true ? <Homepage /> : <SignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
