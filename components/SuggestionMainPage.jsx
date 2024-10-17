import React from "react";
import styles from "./SuggestionMainPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Card from "./Card";
import Carouseltest from "./Carousel";

const SuggestionMainPage = (props) => {
  console.log(props);
  return (
    <div>
      <Carouseltest />
    </div>
    // <Swiper
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={30}
    //   slidesPerView={5}
    //   navigation
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    //   className={`${styles.main_Conteiner}`}
    // >
    //   {props.items.data.map((item) => {
    //     return (
    //       <SwiperSlide className={`${styles.act}`}>
    //         {" "}
    //         <Card item={item} />
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
  );
};

export default SuggestionMainPage;
