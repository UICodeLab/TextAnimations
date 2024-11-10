// src/App.js
import React from 'react';
import './App.css';

function App() {
  const text = "Text Animation";

  return (
    <div className="App">
      <h1 className="glow">{text}</h1>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
