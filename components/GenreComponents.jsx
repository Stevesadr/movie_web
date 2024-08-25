import React from "react";
import styles from "./GenreComponents.module.css";
import Link from "next/link";

const GenreComponents = (props) => {
  return (
    <Link href={`./Genre/${props.item.id}`} className={`${styles.name_Zharn}`}>
      <div>
        <h5>{props.item.name}</h5>
      </div>
    </Link>
  );
};

export default GenreComponents;
