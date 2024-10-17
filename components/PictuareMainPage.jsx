import React from "react";
import ImageBox from "./ImageBox";
import Image from "next/image";
import styles from "./PictuareMainPage.module.css";
import Link from "next/link";

const PictuareMainPage = (props) => {
  return (
    <div className={`${styles.main_Conteiner}`}>
      <div className={`${styles.img_Box}`}>
        <ImageBox resCardData={props.items} />
      </div>
      <Link
        href={`../CardInfo/${props.items.id}`}
        className={`${styles.img_Conteiner}`}
      >
        <div>
          <Image
            src={props.items.poster}
            height={100}
            width={60}
            className={`${styles.img_Poster}`}
          />
        </div>
        <div>
          <h3 className={`${styles.title_Info}`}>{props.items.title}</h3>
          <h3 className={`${styles.title_Info}`}>{props.items.year}</h3>
        </div>
      </Link>
    </div>
  );
};

export default PictuareMainPage;
