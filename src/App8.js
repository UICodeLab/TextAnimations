import React from 'react';
import './App.css';

function App() {
  const text = "Text Animation      ";

  return (
    <div className="App">
      <h1 className="circular-text">
        {text.split("").map((char, index) => (
          <span key={index} style={{ transform: `rotate(${-index * (360 / text.length)}deg)` }}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;
