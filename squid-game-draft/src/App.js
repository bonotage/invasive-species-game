import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import io from "socket.io-client";

import Home from "./Home";
import Game1 from "./Game1";

import card from "./resources/card.png";

const socket = io.connect("/");

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [landing, setLanding] = useState(true);

  const childToParent = (childdata) => {
    setStartGame(childdata);
  };

  // if (true) {
  //   return (
  //     <div>
  //       <Game1></Game1>
  //     </div>
  //   );
  // } else

  return (
    <div>
      <Home childToParent={childToParent}></Home>
      {/* {console.log(startGame)} */}
    </div>

    //     <Router>
    // {/* <App /> */}
    // <Routes>
    //     <Route exact path="/" component={App}/>
    //     <Navigate path = "/Game1" component = {Game1}/>
    // </Routes>
    // </Router>
  );
};

export default App;
