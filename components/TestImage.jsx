import React from "react";
import styles from "./TestImage.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from "react-redux";
import ReactImageGallery from "react-image-gallery";
import { changeKeyArray } from "@/repository/arrayKeyChange";
import { useRouter } from "next/router";

const TestImage = () => {
  const data = useSelector((state) => state.imageslice);
  const urlPath = useRouter();
  const myitem = data[0];
  const newArray = changeKeyArray(myitem, "poster", "original");
  const clickhandler = () => {
    urlPath.push("../genrePage");
  };
  return (
    <div>
      <div className={`${styles.main_Div}`}>
        <ReactImageGallery
          items={newArray}
          autoPlay={true}
          slideInterval={3000}
          showFullscreenButton={false}
          lazyLoad={true}
          showThumbnails={false}
          showPlayButton={false}
          showBullets={true}
          showNav={false}
          image
          srcSet={`../Pages/CardInfo/${myitem.id}`}
          sizes={"100em"}
          onClick={clickhandler}
          className={`${styles.img}`}
        />
      </div>
    </div>
  );
};

export default TestImage;
