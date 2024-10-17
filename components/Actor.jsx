import React from "react";
import Actorimage from "./Actorimage";
import styles from "./Actor.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Actor = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={`${styles.main_Conteiner}`}
    >
      {props.items.map((item) => {
        return (
          <SwiperSlide className={`${styles.act}`}>
            {" "}
            <Actorimage data={item} />{" "}
          </SwiperSlide>
        );
      })}
    </Swiper>
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={5}
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   navigation
    // >
    //   <SwiperSlide >
    //     {props.items.map((item) => {
    //       return <Actorimage data={item} />;
    //     })}
    //   </SwiperSlide>
    // </Swiper>
  );
};

export default Actor;
