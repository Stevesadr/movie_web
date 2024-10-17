import React from "react";
import styles from "./RightDivFoter.module.css";
import Image from "next/image";

const RightDivFoter = () => {
  return (
    <div className={`${styles.outerConteiner}`}>
      <div className={`${styles.right_Div}`}>
        <p>Get the IMDb app</p>
        <p>For Android and iOS</p>
      </div>
      <div className={`${styles.left_Div}`}>
        <Image
          className={`${styles.qr_img}`}
          src={
            "https://qrweb.vercel.app/_next/image?url=https%3A%2F%2Fqr-code.ir%2Fapi%2Fqr-code%2F%3Fd%3Dhttps%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fimdb-movies-tv-shows%2Fid342792525%3F_branch_match_id%3D1223877291495820805%26_branch_referrer%3DH4sIAAAAAAAAA8soKSkottLXL86pTNJLLCjQy8nMy9Z3TLQ0S%252FZJdkp1TLKvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQC46bnMOwAAAA%253D%253D%26utm_campaign%3DDesktopQRCodeFooter-Click%26utm_medium%3Dmarketing%26utm_source%3DDesktop&w=640&q=75"
          }
          height={40}
          width={40}
        />
      </div>
    </div>
  );
};

export default RightDivFoter;
