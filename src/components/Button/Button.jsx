import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, disabled, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
