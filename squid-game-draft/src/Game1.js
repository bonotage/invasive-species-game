import React, { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Game1.module.scss";
import piggy from "./resources/piggy.png";
import TextBox from "./TextBox";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

const Game1 = () => {
  // const [wobble, setWobble] = useState(1);

  // document.body.style.backgroundColor = "black";

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setResponse(data);
      console.log(response);
    });
  }, []);

  // if (true) {
  //   return (
  //     <div>
  //       <TextBox />
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* <img
        classNameName={styles.image}
        src="https://source.unsplash.com/random/400x200"
        alt="randomised!"
        onClick={() => setWobble(1)}
        // onAnimationEnd={() => setWobble(0)}
        wobble={wobble}
      />
      {wobble}
      {console.log(wobble)} */}

      <div className="wrapper">
        <div className="grid">
          <div className="container">
            <img
              className="piggybank"
              src={piggy}
              alt="piggy bank"
              width="300"
              height="300"
            ></img>

            <h1 class="title1 demon">Lanternfly</h1>
            <h2 class="title2 killer">killer</h2>
            {/* <p>
              It's <time dateTime={response}>{response}</time>
            </p> */}
          </div>
        </div>
        <input className="input-demon input-demon1" type="radio" id="demon1" />
        <input className="input-demon input-demon2" type="radio" id="demon2" />
        <input className="input-demon input-demon3" type="radio" id="demon3" />
        <input className="input-demon input-demon4" type="radio" id="demon4" />
        <input className="input-demon input-demon5" type="radio" id="demon5" />
        <input className="input-demon input-demon6" type="radio" id="demon6" />
        <input className="input-demon input-demon7" type="radio" id="demon7" />
        <input className="input-demon input-demon8" type="radio" id="demon8" />
        <label for="demon1" className="minion minion1">
          <span></span>
        </label>
        <label for="demon2" className="minion minion2">
          <span></span>
        </label>
        <label for="demon3" className="minion minion3">
          <span></span>
        </label>
        <label for="demon4" className="minion minion4">
          <span></span>
        </label>
        <label for="demon5" className="minion minion5">
          <span></span>
        </label>
        <label for="demon6" className="minion minion6">
          <span></span>
        </label>
        <label for="demon7" className="minion minion7">
          <span></span>
        </label>
        <label for="demon8" className="minion minion8">
          <span></span>
        </label>
        <div className="sum">Minions Destroyed {response}:</div>
      </div>
    </div>
  );
};

export default Game1;
