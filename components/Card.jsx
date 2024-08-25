import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Link
      href={`../CardInfo/${item.id}`}
      className={`${styles.outer_Conteiner}`}
    >
      <Image src={item.poster} height={100} width={60} />
      <h5> {item.title}</h5>
    </Link>
  );
};

export default Card;
