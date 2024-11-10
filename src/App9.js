import React from 'react';
import './App.css';

function App() {
  const text = "Text Animation";

  return (
    <div className="App">
      <h1 className='text_animate'>{text}</h1>
      <h1 className='text_outline'>{text}</h1>
    </div>
  );
}

export default App;
