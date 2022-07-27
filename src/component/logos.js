import React from "react";
import styles from "./logos.module.css";
import logo1 from "../Images/logo1.png";
import logo2 from "../Images/logo2.png";
import logo3 from "../Images/logo3.png";
const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>whow Support Us ?</h3>
      <img src={logo1} alt="logo" />
      <img src={logo2} alt="logo" />
      <img src={logo3} alt="logo" />
    </div>
  );
};

export default Logos;
