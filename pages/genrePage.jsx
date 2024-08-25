import React from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/genrePage.module.css";
import { useRouter } from "next/router";
import GenreComponents from "@/components/GenreComponents";

const genrePage = () => {
  const urlPath = useRouter();
  const allZhara = useSelector((state) => state.zhanrslice);
  const data = allZhara[0];
  const cahngePageHandler = () => {
    urlPath.push("./");
  };
  return (
    <div className={`${styles.outer_Conteiner}`}>
      {data.map((item) => {
        return <GenreComponents item={item} />;
      })}
      <button className={`${styles.btn_MainPage}`} onClick={cahngePageHandler}>
        Back
      </button>
    </div>
  );
};

export default genrePage;
