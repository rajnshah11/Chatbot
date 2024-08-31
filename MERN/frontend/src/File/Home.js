import React from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Home/Aboutus";
import Managementteam from "./components/Home/Management/Management";
import Followus from "./components/Home/Followus";
import Header from "./components/Home/Header";
import "./home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Aboutus />
      <Managementteam />
      <Followus />
    </>
  );
};
export default Home;
