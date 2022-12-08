import React from "react";

const Test = (props) => {
  const { text } = props;
  return <label>{text ?? "Tyhjä"}</label>;
};

export default Test;
