import React from 'react';
import './App.css';

function App() {
  const text = "Text Animation";

  return (
    <div className="App">
      <h1 className="text text1">{text}</h1>
      <h1 className="text text2">{text}</h1>
      <h1 className="text text3">{text}</h1>
    </div>
  );
}

export default App;
