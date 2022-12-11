import React from "react";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return <h3 className={styles.Header}>{children}</h3>;
};

export default Header;
