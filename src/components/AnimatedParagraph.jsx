import React from "react";
import "../assets/css/AnimatedParagraph.css";

const AnimatedParagraph = ({ text }) => {
  return (
    <div className="animated-paragraph">
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * .5}ms` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedParagraph;