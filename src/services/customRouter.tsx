import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CustomNavbar from "../components/customNavbar";
import Home from "../scenes/home/home"

export default function CustomRouter() {
  
  return (
    <Router>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}