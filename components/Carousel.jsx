import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import styles from "./Carousel.module.css";
import Link from "next/link";

const Carouseltest = ({ resCardCarousel }) => {
  const data = useSelector((state) => state.imageslice);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={`${styles.outer_Conteiner}`}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        ltr
        dotListClass="custom-dot-list-style"
      >
        {resCardCarousel.data.map((imageUrl) => {
          return (
            <div className={("slider", `${styles.img_carousel_div}`)}>
              <Link
                href={`/CardInfo/${imageUrl.id}`}
                className={`${styles.img_carousel_div}`}
              >
                <img
                  src={imageUrl.poster}
                  alt="movie"
                  style={{ height: "inherit" }}
                />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carouseltest;
