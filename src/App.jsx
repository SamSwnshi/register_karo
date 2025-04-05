import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import ChooseUs from "./component/ChooseUs";
import OurService from "./component/OurService"
import Card from "./component/Card";
import GetStarted from "./component/GetStarted"

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <ChooseUs/>
      <OurService/>
      <Card/>
      <GetStarted/>
    </div>
  );
};

export default App;
