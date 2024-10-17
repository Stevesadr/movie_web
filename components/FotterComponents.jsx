import React, { useEffect } from "react";
import styles from "./FotterComponents.module.css";
import ButtonSinginFoter from "./ButtonSinginFoter";
import FooterComponent from "./FooterComponent";
import TextFooter from "./TextFooter";
import Aos from "aos";
import "aos/dist/aos.css";

const FotterComponents = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className={`${styles.outerComponents}`}>
      <div className={`${styles.singin_Div}`} data-aos="fade-up">
        {" "}
        <ButtonSinginFoter> Sign in for more access </ButtonSinginFoter>{" "}
      </div>
      <div className={`${styles.betwiin_Div}`} data-aos="fade-up">
        <FooterComponent />
      </div>
      <div className={`${styles.text_Div}`} data-aos="fade-up">
        <TextFooter />
      </div>
    </div>
  );
};

export default FotterComponents;
