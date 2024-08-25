import React, { useState } from "react";
import styles from "./SaveCardComponents.module.css";
import Image from "next/image";
import BtnForcamponentsSave from "./BtnForcamponentsSave";
const SaveCardComponents = ({ data }) => {
  return (
    <div className={`${styles.outer_Conteiner}`}>
      <div className={`${styles.image_Div}`}>
        <Image
          src={data.poster}
          width={60}
          height={100}
          className={`${styles.image_Tag}`}
        />
      </div>
      <div className={`${styles.info_Div}`}>
        {" "}
        <div> Name : {data.title}</div>
        <div>Actors : {data.actors}</div>
        <div> Country: {data.country}</div>
        <div> Director : {data.director}</div>
        <div> Time : {data.runtime} </div>
      </div>
      <div className={`${styles.btn_Div}`}>
        {" "}
        <BtnForcamponentsSave resCardData={data} />
      </div>
    </div>
  );
};

export default SaveCardComponents;
