import React from "react";
import styles from "./FooterComponent.module.css";
import LeftDivFoter from "./LeftDivFoter";
import RightDivFoter from "./RightDivFoter";

const FooterComponent = () => {
  return (
    <div className={`${styles.outerConterner}`}>
      <div className={`${styles.right_Div}`}>
        <LeftDivFoter />
      </div>
      <div className={`${styles.right_Div}`}>
        <RightDivFoter />
      </div>
    </div>
  );
};

export default FooterComponent;
