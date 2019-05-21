import React from "react";
import Header from "./Header";
import Circle from "./Circle";

import fill from "../images/fill.jpg";
import theme from "../images/theme.png";
import download from "../images/download.png";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="text-right my-2">
        <Button variant="light" size="lg">
          Sign In
        </Button>
        <Button variant="light" size="lg" className="ml-2">
          Sign Up
        </Button>
      </div>
      <Header />
      <div className="flex space-around">
        <Circle title="1. Fill your details" bg={fill} />
        <Circle title="2. Create your theme" bg={theme} />
        <Circle title="3. Download  " bg={download} />
      </div>
    </div>
  );
};

export default Home;
