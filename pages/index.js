import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TestImage from "@/components/TestImage";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "@/redux/fichers/Slice/MainSlicer";
import Zhanrs from "@/components/Genre";
import { addZharnArray } from "@/redux/fichers/Slice/ZhanrsSlicer";
import { GETRANDOMECAROUSEL } from "@/repository/randomeCarousel";
import Carouseltest from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const dispatch = useDispatch();
  dispatch(addImage(props.resMainSliser.data));
  dispatch(addZharnArray(props.rerZhanrs));
  const test = [];
  // console.log(props.resRandomeData);
  if (localStorage.getItem("token") === null) {
    console.log("nothig is hear !");
  } else {
    console.log(localStorage.getItem("token"));
  }
  return (
    <>
      <div>
        <div className={`${styles.outerConteiner}`}>
          <div className={`${styles.right_Conteiner}`}>
            <Zhanrs />
          </div>
          <div className={`${styles.left_Conteiner}`}>
            <TestImage />
          </div>
        </div>
        <div>
          <Carouseltest resCardCarousel={props.resRandomeData} />
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

  const urlZhanrs = await fetch("https://moviesapi.ir/api/v1/genres");
  const rerZhanrs = await urlZhanrs.json();

  const urlRandomeData = await GETRANDOMECAROUSEL();
  const resRandomeData = await urlRandomeData.json();

  return {
    props: {
      resMainSliser,
      rerZhanrs,
      resRandomeData,
    },
    revalidate: 5000,
  };
}
