import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.textContainer}>
        <div className={styles.heading}>Hello Puneet Dhiman</div>
        <div className={styles.subtitle}>
          following is your organization’s performance summary
        </div>
        {/* <div className={styles.backgroundContainer}>
          <div className={styles.ellipse4}></div>
          <div className={styles.ellipse5}></div>
        </div> */}
      </div>
    </div>
  );
}
