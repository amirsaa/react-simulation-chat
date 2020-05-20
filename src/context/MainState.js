import React, { useState } from 'react';
import MainContext from './mainContext';

const MainState = (props) => {
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const [emojiList, setEmojiList] = useState([
    {
      id: 1,
      emoji: '😀',
    },
    {
      id: 2,
      emoji: '😁',
    },
    {
      id: 3,
      emoji: '😂',
    },
    {
      id: 4,
      emoji: '😄',
    },
    {
      id: 5,
      emoji: '😍',
    },
    {
      id: 6,
      emoji: '🙄',
    },
    {
      id: 7,
      emoji: '😊',
    },
    {
      id: 8,
      emoji: '😫',
    },
    {
      id: 9,
      emoji: '😭',
    },
    {
      id: 10,
      emoji: '🤢',
    },
    {
      id: 11,
      emoji: '🌹',
    },
    {
      id: 12,
      emoji: '❤',
    },
  ]);

  const [visible, setVisible] = useState(false);

  return (
    <MainContext.Provider
      value={{
        emojiList,
        setEmojiList,

        selectedEmoji,
        setSelectedEmoji,

        visible,
        setVisible,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
