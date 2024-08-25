import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/CardPage.module.css";
import Image from "next/image";
import ImageBox from "@/components/ImageBox";
import Carousel from "@/components/Carousel";
import Carouseltest from "@/components/Carousel";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "@/redux/fichers/Slice/AddToSave";
import BtnSaveMovie from "@/components/BtnSaveMovie";
import Test from "@/components/Test";
import BtnForcamponentsSave from "@/components/BtnForcamponentsSave";
import { GETRANDOMECAROUSEL } from "@/repository/randomeCarousel";

const CardPage = ({ resCardData, resCardCarousel }) => {
  const [showImageBtn, setShowImageBtn] = useState(false);
  const data = useSelector((state) => {
    return state.savemovieslice;
  });
  const dispatch = useDispatch();
  console.log(data);
  console.log(resCardData.id);
  // console.log(mathrandome);
  // console.log(resCardCarousel);
  // useEffect(() => {
  //   dispatch(ConditionImage(true));
  // }, []);
  const imagesFotSlicer = () => {
    setShowImageBtn(!showImageBtn);
  };
  const testme = {
    visibility: "hidden",
  };
  const testme2 = {
    display: "block",
  };
  const addSaveMovie = () => {
    dispatch(addMovie(resCardData));
  };
  return (
    <div className={`${styles.outer_Conteiner}`}>
      <div className={`${styles.info_Conteiner}`}>
        <div className={`${styles.img_Conteiner}`}>
          <Image
            src={resCardData.poster}
            height={100}
            width={60}
            className={`${styles.img_Poster}`}
          />
        </div>
        <div className={`${styles.data_movie}`}>
          <div> Name : {resCardData.title}</div>
          <div>Actors : {resCardData.actors}</div>
          <div> Country: {resCardData.country}</div>
          <div> Director : {resCardData.director}</div>
          <div> Time : {resCardData.runtime} </div>
          <div>
            {resCardData.images !== undefined ? (
              <button
                onClick={imagesFotSlicer}
                className={`${styles.btn_ShowImages}`}
              >
                Pictures
              </button>
            ) : null}
          </div>
          <div className={`${styles.see_next_time_Div}`}>
            <BtnForcamponentsSave resCardData={resCardData} />
            {/* {data.item.find((item) => item.id === resCardData.id) ? (
              <Test resCardData={resCardData.id} structure={true} />
            ) : (
              <BtnSaveMovie data={resCardData} structure={true} />
            )} */}
            {/* <BtnSaveMovie data={resCardData} /> */}
            {/* <button
              className={`${styles.see_next_time_Btn}`}
              onClick={addSaveMovie}
            >
              <span>
                <BsFillBookmarkFill />
              </span>
              I Will Watch Later{" "}
            </button> */}
          </div>
        </div>
      </div>
      <div>
        <Carouseltest resCardCarousel={resCardCarousel} />
      </div>
      <div style={showImageBtn === false ? testme : testme2}>
        <ImageBox
          setShowImageBtn={setShowImageBtn}
          resCardData={resCardData}
          showImageBtn={showImageBtn}
        />
      </div>
      {/* {resCardCarousel.data.map((item) => {
        return <h1>{item.title}</h1>;
      })} */}
    </div>
  );
};

export default CardPage;

export async function getServerSideProps(constex) {
  const urlCardData = await fetch(
    `https://moviesapi.ir/api/v1/movies/${constex.params.CardPage}`
  );
  const resCardData = await urlCardData.json();

  // const mathrandome = Math.floor(Math.random() * 15) + 1;
  // console.log(mathrandome);

  // const urlCardCarousel = await fetch(
  //   `https://moviesapi.ir/api/v1/genres/${mathrandome}/movies?page={page}`
  // );
  const getRandomeData = await GETRANDOMECAROUSEL();
  const resCardCarousel = await getRandomeData.json();
  return {
    props: {
      resCardData,
      resCardCarousel,
    },
  };
}
