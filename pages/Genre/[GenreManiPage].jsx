import Card from "@/components/Card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/GenreManiPage.module.css";

const GenreManiPage = (props) => {
  return (
    <div className={`${styles.outer_Conteiner}`}>
      {props.resDaynamicGener.data.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default GenreManiPage;

export async function getServerSideProps(constex) {
  const urlDaynamicGener = await fetch(
    `https://moviesapi.ir/api/v1/genres/${constex.params.GenreManiPage}/movies?page={page}`
  );
  const resDaynamicGener = await urlDaynamicGener.json();
  console.log(constex.params.GenreManiPage);
  return {
    props: { resDaynamicGener },
  };
}
