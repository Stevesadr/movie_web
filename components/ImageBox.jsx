import React, { useEffect, useRef, useState } from "react";
import styles from "./ImageBox.module.css";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ImageBox = ({ setShowImageBtn, resCardData, showImageBtn }) => {
  const [changeImageSlicer, setChangeImageSlicer] = useState(0);
  const imgRef = useRef();
  const pageRef = useRef();
  const nextimageHandler = () => {
    changeImageSlicer < 2
      ? setChangeImageSlicer(changeImageSlicer + 1)
      : setChangeImageSlicer(0);
  };
  const forthimageHandler = () => {
    changeImageSlicer > 0
      ? setChangeImageSlicer(changeImageSlicer - 1)
      : setChangeImageSlicer(2);
  };
  window.addEventListener("click", (e) => {
    if (e.target === pageRef.current) {
      setShowImageBtn(!showImageBtn);
    }
  });

  if (resCardData.images !== undefined) {
    return (
      <div className={`${styles.outer_Conteiner}`} ref={pageRef}>
        <div className={`${styles.image_Conteiner}`} ref={imgRef}>
          <div className={`${styles.images}`}>
            <Image
              className={`${styles.TopImages}`}
              width={1200}
              height={200}
              alt="aaa"
              src={resCardData.images[changeImageSlicer]}
            />
          </div>
          <div className={`${styles.next_Icon}`} onClick={nextimageHandler}>
            <GrNext />
          </div>
          <div className={`${styles.back_Icon}`} onClick={forthimageHandler}>
            <GrPrevious />
          </div>
        </div>
      </div>
    );
  }
};

export default ImageBox;
