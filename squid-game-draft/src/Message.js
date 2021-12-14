import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";
import "./DialogBox.css";

const Message = ({ message }) => {
  const items = useMemo(
    () =>
      message.split("").map((letter, index) => ({
        item: letter,
        key: index,
      })),
    [message]
  );

  console.log(message);

  console.log(items); //issue not with memo or items
  console.log(items[items.length - 1].key);

  const transitions = useTransition(items, (item) => item.key, {
    trail: 35,
    from: { display: "none" },
    enter: { display: "" },
  });

  const flush = useTransition([""], (item) => item.key, {
    trail: 35,
    from: { display: "none" },
    enter: { display: "" },
  });

  console.log("got here");

  return (
    <div>
      <div className="DialogMessage">
        {transitions.map(({ item, props, key }) => {
          // {
          //   console.log(item.item);
          // }
          return (
            <animated.span key={key} style={props}>
              {item.item}
            </animated.span>
          );
        })}
      </div>
    </div>
  );
};

export default Message;
