import React, { useState } from "react";
import MainContext from "./mainContext";

const MainState = (props) => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const [emojiList, setEmojiList] = useState([
    {
      id: 1,
      emoji: "😀",
    },
    {
      id: 2,
      emoji: "😁",
    },
    {
      id: 3,
      emoji: "😂",
    },
    {
      id: 4,
      emoji: "😄",
    },
    {
      id: 5,
      emoji: "😍",
    },
    {
      id: 6,
      emoji: "🙄",
    },
    {
      id: 7,
      emoji: "😊",
    },
    {
      id: 8,
      emoji: "😫",
    },
    {
      id: 9,
      emoji: "😭",
    },
    {
      id: 10,
      emoji: "🤢",
    },
    {
      id: 11,
      emoji: "🌹",
    },
    {
      id: 12,
      emoji: "❤",
    },
  ]);

  const [senderUserName, setSenderUserName] = useState("Amir");
  const [receiverUserName, setReceiverUserName] = useState("Sara");

  var i = 0;
  var txt = "is typing...";
  var speed = 50;

  let text = "";
  function typeWriter() {
    if (i < txt.length) {
      text += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  console.log(text);

  return (
    <MainContext.Provider
      value={{
        emojiList,
        setEmojiList,

        selectedEmoji,
        setSelectedEmoji,

        senderUserName,
        setSenderUserName,

        receiverUserName,
        setReceiverUserName,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
