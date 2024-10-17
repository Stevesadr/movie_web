import React from "react";
import styles from "./TextFooter.module.css";

const TextFooter = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footer_row}`}>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          Help
        </span>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          Site Index
        </span>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          IMDbPro
        </span>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          Box Office Mojo
        </span>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          License IMDb Data
        </span>
      </div>
      <div className={`${styles.footer}`}>
        <span className={`${styles.footer_link}`}>Press Room</span>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          Advertising
        </span>
        <span className={`${styles.footer_link} ${styles.external_link}`}>
          Jobs
        </span>
        <span className={`${styles.footer_link}`}>Conditions of Use</span>
        <span className={`${styles.footer_link}`}>Privacy Policy</span>
        <span className={`${styles.footer_link}`}>
          Your Ads Privacy Choices
        </span>
      </div>
    </div>
  );
};

export default TextFooter;
