import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Genre.module.css";
import { useRouter } from "next/router";

import GenreComponents from "./GenreComponents";

const Genre = () => {
  const urlChange = useRouter();
  const zharnData = useSelector((state) => state.zhanrslice);
  const forTest = zharnData[0];
  const [sizePage, setSizePage] = useState([0]);
  useEffect(() => {
    const cahngePageSize = () => {
      setSizePage([window.innerWidth]);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", cahngePageSize);
      cahngePageSize();
    }
  }, []);
  const changePageHandler = () => {
    urlChange.push("../genrePage");
  };

  return (
    <div className={`${styles.outer_Conteiner}`}>
      {forTest.map((item) => {
        if (sizePage >= 900) {
          if (item.id <= 12) {
            return (
              <div className={`${styles.change_DivSize}`}>
                {" "}
                <GenreComponents item={item} key={item.id} />
              </div>
            );
            // <div className={`${styles.name_Zharn}`} >
            //   <h5>{item.name} </h5>
            // </div>
          }
        } else {
          if (item.id <= 2) {
            return (
              <div className={`${styles.change_Small_DivSize}`}>
                {" "}
                <GenreComponents item={item} key={item.id} />
              </div>
            );
          }
        }
      })}
      <div className={`${styles.zhanr_Page_Btn}`} onClick={changePageHandler}>
        All
      </div>
    </div>
  );
};

export default Genre;
