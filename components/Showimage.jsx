import Image from "next/image";
import React from "react";
import styles from "./Showimage.module.css";

const Showimage = (props) => {
  console.log(props);
  return (
    <div className={`${styles.outerConteiner}`}>
      {
        <Image
          src={props.items.original}
          height={200}
          width={200}
          className={`${styles.img}`}
        />
      }
    </div>
  );
};

export default Showimage;
