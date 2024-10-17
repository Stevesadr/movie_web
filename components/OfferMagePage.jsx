import React from "react";
import CardOfferMane from "./CardOfferMane";
import styles from "./OfferMagePage.module.css";

const OfferMagePage = (props) => {
  const firstThree = props.items.data.slice(0, 3);
  console.log(firstThree);

  return (
    <div className={`${styles.outerConteiner}`}>
      {firstThree.map((item) => {
        return <CardOfferMane data={item} />;
      })}
    </div>
  );
};

export default OfferMagePage;
