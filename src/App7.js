import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const text = "Text Animation";
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(false);
      setTimeout(() => setFlip(true), 100);
    }, (text.length * 100) + 2000);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <div className="App">
      <h1 className="text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={flip ? "flip" : ""}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <h1 className="reflection">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={flip ? "flip" : ""}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;
