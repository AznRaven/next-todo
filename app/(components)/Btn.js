"use client";
import React from "react";

const Btn = ({ onClickString, text, className }) => {
  const onClickHandler = () => {
    const fn = new Function(`return (${onClickString})`)();
    fn();
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Btn;
