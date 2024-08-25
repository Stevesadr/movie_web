import { removeMovie } from "@/redux/fichers/Slice/AddToSave";
import React from "react";
import styles from "./Test.module.css";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";

const Test = ({ resCardData }) => {
  const data = useSelector((state) => {
    return state.savemovieslice;
  });
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(removeMovie(resCardData))}
      className={`${styles.see_next_time_Btn}`}
    >
      <samp>
        <MdDeleteForever />
      </samp>
      Delete from save
    </button>
  );
};

export default Test;
