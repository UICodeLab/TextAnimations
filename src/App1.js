import React from 'react';
import './App.css';

function App() {
  const text = "Text Animation";

  return (
    <div className="App">
      <h1>
        {text.split("").map((char, index) => (
          <span 
            key={index} 
            className="blur-in-char"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;
