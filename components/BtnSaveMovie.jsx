import React from "react";
import styles from "./BtnSaveMovie.module.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "@/redux/fichers/Slice/AddToSave";
import { MdDeleteForever } from "react-icons/md";

const BtnSaveMovie = (props) => {
  const dispatch = useDispatch();
  const addSaveMovie = () => {
    dispatch(addMovie(props.data));
  };

  return (
    <button className={`${styles.see_next_time_Btn}`} onClick={addSaveMovie}>
      <span>
        <BsFillBookmarkFill />
      </span>
      I Will Watch Later{" "}
    </button>
  );
};

export default BtnSaveMovie;
