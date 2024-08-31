import React from "react";
import Footer from "../shared/Footer";
import NavbarMain from "./NavbarMain";
import Card from "./Main/Card";
const Main = () => {
  return (
    <>
      <NavbarMain />
      <div className="row row-cols-1 row-cols-md-2 my-5 mx-1 ">
        <Card
          imageurl="unnamed"
          title="Personal details"
          content="Fill in your Personal Details."
          button1="Profile"
          link="/profile"
        />
        <Card
          imageurl="unnamed"
          title="Talk with our Chatbot"
          content="Ensure Your are Fit by taking a Healthcare test."
          button1=" Get Started"
          link="/"
        />
      </div>
      <Footer />
    </>
  );
};
export default Main;
