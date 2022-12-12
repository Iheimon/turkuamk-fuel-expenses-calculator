import React from "react";
import styles from "./FlexRow.module.css";

const FlexRow = ({ children }) => {
  return <div className={styles.FlexRow}>{children}</div>;
};

export default FlexRow;
