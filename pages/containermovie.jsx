import React from "react";
import { useSelector } from "react-redux";
import styles from "@/styles/containermovie.module.css";
import SaveCardComponents from "@/components/SaveCardComponents";
import Image from "next/image";
import Link from "next/link";

const containermovie = () => {
  const data = useSelector((state) => state.savemovieslice);
  return (
    <div className={`${styles.outer_Conteiner}`}>
      {data.totalTime === 0 ? (
        <div className={`${styles.left_Conteiner}`}>
          <Image
            src={"/images/undraw_add_notes_re_ln36.svg"}
            width={100}
            height={100}
            className={`${styles.iamge_None_total}`}
          />
        </div>
      ) : (
        <div className={`${styles.left_Conteiner}`}>
          {data.item.map((item) => {
            return <SaveCardComponents data={item} />;
          })}
        </div>
      )}

      <div className={`${styles.right_Conteiner}`}>
        <div className={`${styles.total_Info}`}>
          <div className={`${styles.total_Time_Info}`}>
            <label>Total Time :</label>
            {data.totalTime}
          </div>
          <div className={`${styles.total_Time_Info}`}>
            <label>Total Count :</label>
            {data.totalMovie}
          </div>
        </div>
      </div>
    </div>
  );
};

export default containermovie;
