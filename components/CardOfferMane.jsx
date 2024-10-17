import Image from "next/image";
import React from "react";
import styles from "./CardOfferMane.module.css";
import { FaRegPlayCircle } from "react-icons/fa";
import Link from "next/link";

const CardOfferMane = (props) => {
  console.log(props.data);
  return (
    <Link
      href={`../CardInfo/${props.data.id}`}
      className={`${styles.outerConteiner}`}
    >
      <div className={`${styles.image_Conteiner}`}>
        <Image
          src={props.data.poster}
          height={100}
          width={60}
          className={`${styles.img_Poster}`}
        />
      </div>
      <div className={`${styles.body_Image}`}>
        <div className={`${styles.text_Conteiner}`}>
          <h3>{props.data.title}</h3>
          {props.data.genres.map((item) => {
            return <h4>"{item}"</h4>;
          })}
        </div>
        <div className={`${styles.icon_Div}`}>
          <FaRegPlayCircle />
        </div>
      </div>
    </Link>
  );
};

export default CardOfferMane;
