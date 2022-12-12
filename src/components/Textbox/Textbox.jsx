import React from "react";
import styles from "./Textbox.module.css";

const Textbox = ({ id, text, type, onChange, value }) => {
  /**
   * Validates that the given input is valid for the defined type.
   * @param {object} - Event object
   * @returns {object|undefined}
   */
  const validateChange = (event) => {
    const re = /^[1-9]\d*(\.\d+)?$/;
    if (event.target.value === "" || re.test(event.target.value)) return onChange(event);
    if (type === "text") return onChange(event);
  };

  return (
    <div className={styles.InputContainer}>
      <span className={styles.InputText}>{text}</span>
      <input
        id={id}
        className={styles.Input}
        type={type ?? "text"}
        onChange={validateChange}
        value={value}
      />
    </div>
  );
};

export default Textbox;
