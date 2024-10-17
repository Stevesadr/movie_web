import React from "react";
import stylse from "./ButtonSinginFoter.module.css";

const ButtonSinginFoter = (props) => {
  return <div className={stylse.main_Div}>{props.children}</div>;
};

export default ButtonSinginFoter;
