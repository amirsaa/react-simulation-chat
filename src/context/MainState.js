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
      emoji: "❤️",
    },
  ]);

  const [senderUserName, setSenderUserName] = useState("Amir");
  const [receiverUserName, setReceiverUserName] = useState("Sara");
  const [messageText, setMessageText] = useState("");
  const [senderBgColor, setSenderBgColor] = useState("#777");
  const [receiverBgColor, setReceiverBgColor] = useState("#eee");

  const [senderIsTyping, setSenderIsTyping] = useState(false);
  const [receiverIsTyping, setReceiverIsTyping] = useState(false);

  return (
    <MainContext.Provider
      value={{
        emojiList,
        setEmojiList,

        selectedEmoji,
        setSelectedEmoji,

        senderUserName,
        setSenderUserName,

        messageText,
        setMessageText,

        receiverUserName,
        setReceiverUserName,

        senderBgColor,
        setSenderBgColor,

        receiverBgColor,
        setReceiverBgColor,

        senderIsTyping,
        setSenderIsTyping,

        receiverIsTyping,
        setReceiverIsTyping,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
