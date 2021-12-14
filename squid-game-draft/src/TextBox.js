// import React, { useEffect, useState } from "react";
// import cx from "classnames";
// import styles from "./Game1.scss";
// import piggy from "./resources/piggy.png";

// const TextBox = () => {
//   // const [wobble, setWobble] = useState(1);

//   //   document.body.style.backgroundColor = "black";

//   showText (target, message, index, interval) {
//     if (index < message.length) {
//       target += message[index++];
//       setTimeout(() => {
//         () => {return(<p> {target} </p>)}, interval);
//     }
//   };

//   return (
//     <div>
//       <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
//       <h2>
//         <a href="#">Stix</a>
//       </h2>
//       <h3>Page not found</h3>
//       <h1></h1>

//       {showText("h1", "I am error 404.", 0, 80)}
//     </div>
//   );
// };

// export default TextBox;
import React from "react";
import DialogBox from "./DialogBox";
import "./DialogBox.css";

// Just hard coding these for now to demonstrate our DialogBox component.
// const messages = [
//   "This is a very cool RPG dialog message.",
//   "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
//   "Remember to wash your hands!",
// ];

export default function TextBox() {
  return (
    <div className="App">
      <DialogBox />
      <div className="SocialShilling"></div>
    </div>
  );
}
