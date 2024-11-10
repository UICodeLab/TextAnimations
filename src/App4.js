import React, { useEffect } from 'react';
import './App.css';

function App() {
  const text = "Text Animation";

  useEffect(() => {
    const headings = document.querySelectorAll('.content h2');
    const colors = ["white", "#4A46FF"];
    
    headings.forEach((heading, index) => {
      const colorIndex = index % 2;
      heading.style.color = colors[colorIndex];

      const clipSize = 60 - index * 2;
      const minClipSize = clipSize - 4;
      const maxClipSize = clipSize + 4;

      const styleSheet = document.styleSheets[0];
      const animationName = `clipPathPulse-${index}`;
      const keyframes = `
        @keyframes ${animationName} {
          0% {
            clip-path: circle(${maxClipSize}% at 50% 50%);
          }
          50% {
            clip-path: circle(${minClipSize}% at 50% 50%);
          }
          100% {
            clip-path: circle(${maxClipSize}% at 50% 50%);
          }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      heading.style.animation = `${animationName} 4s ease-in-out infinite`;
    });
  }, []);

  return (
    <div className="content">
      {Array.from({ length: 30 }, (_, i) => (
        <h2 key={i}>{text}</h2>
      ))}
    </div>
  );
}

export default App;