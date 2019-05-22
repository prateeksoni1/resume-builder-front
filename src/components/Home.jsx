import React, { useState, useEffect } from "react";
import Header from "./Header";
import Circle from "./Circle";
import { Button } from "react-bootstrap";
import fill from "../images/fill.jpg";
import theme from "../images/theme.png";
import download from "../images/download.png";
import FacebookLogin from "react-facebook-login";
import { appid } from "../keys";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, loginUser] = useState(false);

  const responseFacebook = res => {
    console.log(res);
    setUser({ name: res.name, picture: res.picture });
    loginUser(true);
  };

  useEffect(() => {
    if (user !== null) {
      if (!loggedIn) loginUser(true);
    }
  }, [user, loggedIn]);

  useEffect(() => {
    console.log("user", user);
    console.log("login", loggedIn);
  });

  const logoutButton = () => {
    window.FB.logout();
    loginUser(false);
    setUser(null);
  };

  return (
    <div>
      <div className="text-right my-2">
        {loggedIn ? (
          <div>
            <h4>{user.name}</h4>
            <Button onClick={logoutButton}>Logout</Button>
          </div>
        ) : (
          <FacebookLogin
            appId={appid}
            fields="name, email, picture"
            callback={responseFacebook}
            cookie
            redirectUri="http://localhost:3000/dashboard"
          />
        )}
      </div>
      <Header />
      <div className="flex space-around">
        <Circle title="1. Fill your details" bg={fill} />
        <Circle title="2. Create your theme" bg={theme} />
        <Circle title="3. Download" bg={download} />
      </div>
    </div>
  );
};

export default Home;
