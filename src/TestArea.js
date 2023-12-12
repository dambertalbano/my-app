// TestArea.js
import React from 'react';

const TestArea = () => {
  return (
    <section className="test-area">
      {/* Origin Text */}
      <div id="origin-text">
        <p>This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly. Good Luck!</p>
      </div>

      {/* Test Wrapper */}
      <div className="test-wrapper">
        <textarea id="test-area" name="textarea" rows="6" placeholder="Click here to start typing. The clock starts when you start typing."></textarea>
      </div>

      {/* Meta Section */}
      <div className="meta">
        {/* Clock Section */}
        <section id="clock">
          <div className="timer">00:00:00</div>
        </section>

        {/* Words Per Minute Section */}
        <section id="WordsPerMinute">
          <div className="wpm">0 WPM</div>
        </section>

        {/* Accuracy Section */}
        <section id="Accurate">
          <div className="accuracy">100%</div>
        </section>

        {/* Reset Button */}
        <button id="reset">Start over</button>
      </div>
    </section>
  );
}

export default TestArea;
