import React from "react";
import styles from "./Textbox.module.css";

const Textbox = ({ text, type, onChange }) => {
  return (
    <div className={styles.InputContainer}>
      <span className={styles.InputText}>{text}</span>
      <input className={styles.Input} type={type} placeholder='' onChange={onChange} />
    </div>
  );
};

export default Textbox;
