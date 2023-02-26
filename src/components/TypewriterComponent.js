import React from "react";
import Typed from "typed.js";
const TypewriterComponent = () => {
  var typed = new Typed(".auto-type", {
    strings: ["Web dev", "Gym"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
  });
  return (
    <div>
      <h1>
        <span className="auto-type"></span>
      </h1>
    </div>
  );
};
export default TypewriterComponent;
