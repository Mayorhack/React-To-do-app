import React from "react";

const Button = ({ text, color, onshow }) => {
  return (
    <div>
      <button
        onClick={onshow}
        className="button"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
