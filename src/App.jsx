import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import ChooseUs from "./component/ChooseUs";
import OurService from "./component/OurService"
import Card from "./component/Card";
import GetStarted from "./component/GetStarted";
import Partner from './component/Partner'
import Testimonial from "./component/Testimonial";
import Contact from './component/ContactUs'
import Footer from './component/Footer'
import Blog from "./component/LatestBlog"

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <ChooseUs/>
      <OurService/>
      <Card/>
      <GetStarted/>
      <Partner/>
      <Testimonial/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
