// Main.js
import React from 'react';
import Intro from './Intro';
import TestArea from './TestArea';
import TypingTest from './TypingTest';

const Main = () => {
  return (
    <main className="main">
      <Intro />
      <TestArea />
      <TypingTest />
    </main>
  );
}

export default Main;
