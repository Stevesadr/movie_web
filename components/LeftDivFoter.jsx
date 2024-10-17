import React from "react";
import stylse from "./LeftDivFoter.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTiktok } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const LeftDivFoter = () => {
  return (
    <div className={`${stylse.outerConteiner}`}>
      <p> Follow IMDb on social</p>
      <div>
        <span>
          <BiLogoTiktok />{" "}
        </span>
        <span>
          <FaInstagram />{" "}
        </span>
        <span>
          <FaXTwitter />{" "}
        </span>
        <span>
          <FaYoutube />{" "}
        </span>
        <span>
          <IoLogoFacebook />{" "}
        </span>
      </div>
    </div>
  );
};

export default LeftDivFoter;
