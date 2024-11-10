import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const text = "Text Animation";
  const typingSpeed = 100;
  const backspacingSpeed = 50;
  const pauseDuration = 1000;

  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (isTyping) {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsTyping(false);
          }, pauseDuration);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsTyping(true);
          }, pauseDuration);
        }
      }
    }, isTyping ? typingSpeed : backspacingSpeed);

    return () => clearInterval(interval);
  }, [isTyping, currentIndex, isPaused, text]);

  return (
    <div className="App">
      <h1>
        <span>{displayText}</span>
        <span className="caret">|</span>
      </h1>
    </div>
  );
}

export default App;