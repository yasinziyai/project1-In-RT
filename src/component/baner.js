import React from "react";
import styles from "./baner.module.css";
import banner from "../Images/baner.jpg";

const Baner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>Botostart</h1>
        <p>
          we're learning <span>React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Baner;
