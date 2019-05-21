import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div className="background">
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
