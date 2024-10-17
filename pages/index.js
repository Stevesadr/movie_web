// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import TestImage from "@/components/TestImage";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "@/redux/fichers/Slice/MainSlicer";
// import Zhanrs from "@/components/Genre";
import PictuareMainPage from "@/components/PictuareMainPage";
import { addZharnArray } from "@/redux/fichers/Slice/ZhanrsSlicer";
import { GETRANDOMECAROUSEL } from "@/repository/randomeCarousel";
import React, { useEffect } from "react";
import { RANDOMEIMAGEMAINPAGE } from "@/repository/randomeImageMainPage";
import OfferMagePage from "@/components/OfferMagePage";
import Actor from "@/components/Actor";
import Titeltexttag from "@/components/Titeltexttag";
import Shows from "@/components/Shows";
import { GrFormNext } from "react-icons/gr";
// import SuggestionMainPage from "@/components/SuggestionMainPage";
import Carouseltest from "@/components/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import FotterComponents from "@/components/FotterComponents";
export default function Home(props) {
  useEffect(() => {
    AOS.init({});
  }, []);
  const dispatch = useDispatch();
  dispatch(addImage(props.resMainSliser.data));
  dispatch(addZharnArray(props.rerZhanrs));
  // console.log(props.resRandomeData);
  if (localStorage.getItem("token") === null) {
    console.log("nothig is hear !");
  } else {
    console.log(localStorage.getItem("token"));
  }
  return (
    <>
      <div className={`${styles.main_Div}`}>
        <div className={`${styles.outerConteiner}`} data-aos="fade-up">
          <div className={`${styles.img_mainPage}`}>
            <PictuareMainPage items={props.resMainPageImage} />
          </div>
          <div className={`${styles.left_Conteiner}`}>
            <OfferMagePage items={props.resRandomeData} />
          </div>
        </div>
        <div className={`${styles.actors_Div}`} data-aos="fade-up">
          <div className={`${styles.actors_info}`}>
            <Titeltexttag>
              {" "}
              Top picks <GrFormNext className={`${styles.ico}`} />{" "}
            </Titeltexttag>
            <Carouseltest resCardCarousel={props.resRandomeData} />
            {/* <SuggestionMainPage items={props.resRandomeData} /> */}
          </div>
        </div>
        <div className={`${styles.actors_Div}`} data-aos="fade-up">
          <div className={`${styles.actors_info}`}>
            <Titeltexttag> Shows :</Titeltexttag>
            <Shows items={props.resShows} />
          </div>
        </div>
        <div className={`${styles.actors_Div}`} data-aos="fade-up">
          <div className={`${styles.actors_info}`}>
            <Titeltexttag> Most popular celebrities :</Titeltexttag>
            <Actor items={props.resActors} />
          </div>
        </div>
        <div className={`${styles.fotter_Div}`}>
          <FotterComponents />
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const urlMainSliser = await fetch(
    "https://moviesapi.ir/api/v1/movies?page={page}"
  );
  const resMainSliser = await urlMainSliser.json();

  const urlActors = await fetch("https://api.tvmaze.com/episodes/1/guestcast");
  const resActors = await urlActors.json();

  const uslShows = await fetch("https://api.tvmaze.com/shows");
  const resShows = await uslShows.json();

  const urlZhanrs = await fetch("https://moviesapi.ir/api/v1/genres");
  const rerZhanrs = await urlZhanrs.json();

  const urlRandomeData = await GETRANDOMECAROUSEL();
  const resRandomeData = await urlRandomeData.json();

  const urlMainPageImage = await RANDOMEIMAGEMAINPAGE();
  const resMainPageImage = await urlMainPageImage.json();

  return {
    props: {
      resMainSliser,
      rerZhanrs,
      resRandomeData,
      resMainPageImage,
      resActors,
      resShows,
    },
    revalidate: 5000,
  };
}
