import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
const Header = () => {
  return (
    <div className="mb-5">
      <Jumbotron className="header-bg text-white p-5">
        <h1 className="display-2">Resume Builder</h1>
        <p className="lead">Build your own resumes. With your own style.</p>
        <Button className="btn-bg mt-4" size="lg">
          Get Started Now
        </Button>
      </Jumbotron>
    </div>
  );
};

export default Header;
