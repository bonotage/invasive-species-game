import React, { useState } from "react";

import Message from "./Message";
import "./DialogBox.css";

// const messages = [
//   "Strengths: Government support; Weaknesses: Nature",
//   "Strengths: Weaknesses:",
//   "Strengths: +3, Weaknesses: -2",
// ];

const messages = [
  [
    "Strengths: Government Support",
    "Weaknesses: Threatened by invasive species",
  ],
  ["Strengths: No natural predators", "Weaknesses: Many enemies"],
  ["Strengths: +2", "Weaknesses: -2"],
  ["Strengths: +3", "Weaknesses: -3"],
  ["Strengths: +4", "Weaknesses: -4"],
  ["Strengths: +5", "Weaknesses: -5"],
  ["Strengths: +6", "Weaknesses: -6"],
  ["Strengths: +7", "Weaknesses: -7"],
];

// { type: "Agribusiness", src: sorceressImg, src2: phantomImg },
// { type: "Lanternfly", src: knightImg },
// { type: "Citizen", src: shapeshifterImg },
// { type: "Conservationist", src: banditImg },
// { type: "Government", src: archerImg },
// { type: "Other Plants", src: bladeMasterImg },
// { type: "Farmer", src: destroyerImg },

const DialogBox = ({ index }) => {
  console.log("Selected character at index " + index);
  //index of current message
  // const [lastIndex, setlastIndex] = useState(-1);
  // if (index != lastIndex) {setlastIndex(index); setCurrentMessage(0)}

  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClick = () => {
    if (currentMessage < messages[index].length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };
  return (
    <div className="DialogWindow">
      <div className="DialogTitle">Stats</div>
      <Message message={messages[index][currentMessage]} key={currentMessage} />
      <div onClick={handleClick} className="DialogFooter">
        Next
      </div>
    </div>
  );
};

export default DialogBox;
