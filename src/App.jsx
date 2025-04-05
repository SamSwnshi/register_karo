import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import ChooseUs from "./component/ChooseUs";
import OurService from "./component/OurService"
import Card from "./component/Card";
import GetStarted from "./component/GetStarted";
import Partner from './component/Partner'

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
    </div>
  );
};

export default App;
