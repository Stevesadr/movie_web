import React from "react";
import styles from "./Titeltexttag.module.css";

const Titeltexttag = (props) => {
  return <h2 className={`${styles.actor_text}`}>{props.children}</h2>;
};

export default Titeltexttag;
