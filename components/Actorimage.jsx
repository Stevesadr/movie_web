import Image from "next/image";
import React from "react";
import stylse from "./Actorimage.module.css";

const Actorimage = (props) => {
  console.log(props);
  return (
    <div className={`${stylse.outerConteiner}`}>
      {
        <Image
          src={props.data.person.image.original}
          height={100}
          width={60}
          className={`${stylse.img}`}
        />
      }
      <h4>{props.data.person.name}</h4>
    </div>
  );
};

export default Actorimage;
