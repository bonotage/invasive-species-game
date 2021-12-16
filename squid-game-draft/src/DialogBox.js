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
    "Power-ups: Government support and powerful lobbies",
    "Weaknesses: Business can be threatened by displaced species or other natural events",
  ],
  [
    "Power-ups: New environment offers new opportunities for growth",
    "Weaknesses: May be relocated to uncertain, new environments due to changing climate, human activity, or other interference; Narratives about them often driven by xenophobic/bellicose rhetoric",
  ],
  [
    "Power-ups: Ability to weigh different factors to decide on personal course of action",
    "Weaknesses: Subject to different narratives, perhaps fallacious, from various other stakeholders",
  ],
  [
    "Power-ups: Credibility among the general public; Tasked with making important decisions",
    "Weaknesses: Displaced species often seen as threat to their particular species of concern, but these goals can threaten biodiversity goals",
  ],
  [
    "Power-ups: Financial and legal power; Ability to enforce massive shifts in desired direction",
    "Weaknesses: Balancing different stakeholder views and national interests; bureaucracy",
  ],
  [
    "Power-ups: Can flourish due to ecosystem shifts brought by displaced species",
    "Weaknesses: Can be decimated by displaced species due to predation/competition for resources",
  ],
  [
    "Power-ups: Livelihood may be bolstered by supply/demand shifts caused by displaced species",
    "Weaknesses: Produce and livelihood may be threathened by displaced species",
  ],
  [
    "Power-ups: Legal support; Profits from displaced species",
    "Weaknesses: Business depends on existence of flora/fauna designated socially/legally for extermination",
  ],
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
      <Message
        message={messages[index][currentMessage]}
        key={index * 10 + currentMessage}
      />
      <div onClick={handleClick} className="DialogFooter">
        Next
      </div>
    </div>
  );
};

export default DialogBox;
