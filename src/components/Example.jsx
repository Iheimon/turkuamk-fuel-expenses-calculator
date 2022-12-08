import React from "react";

const Example = (props) => {
  const { text } = props;
  return <label>{text ?? "Tyhjä"}</label>;
};

export default Example;
