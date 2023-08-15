import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SignIn from "./Pages/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const isloggedIn = useSelector((state) => state.auth.userLoggedin );


  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path="/" element={isloggedIn == true ? <Homepage/> : <SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
