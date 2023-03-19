import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import CreateImage from "./pages/CreateImage";

const RouteLink = () => {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createImage" element={<CreateImage />} />
    </Routes>
    </>
  )
}

export default RouteLink