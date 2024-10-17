import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Showimage from "./Showimage";
import styles from "./Shows.module.css";

const Shows = (props) => {
  const array = [];
  props.items.map((item) => {
    console.log(item);
    if (item.image !== null) {
      array.push(item.image);
    }
  });
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={`${styles.main_Conteiner}`}
    >
      {array.map((item) => {
        return (
          <SwiperSlide className={`${styles.act}`}>
            {" "}
            <Showimage items={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Shows;
