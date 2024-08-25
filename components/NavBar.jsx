import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { GrDomain } from "react-icons/gr";
import { GiDramaMasks } from "react-icons/gi";
import { RiFolderUserFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const [searchstate, setSearchstate] = useState("");
  const [sizePaage, setSizePaage] = useState([0]);
  const [openNavBar, setOpenNavBar] = useState(false);
  useEffect(() => {
    const changeSizePage = () => {
      setSizePaage([window.innerWidth]);
    };
    window.addEventListener("resize", changeSizePage);
  }, []);
  const urlPat = useRouter();
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      urlPat.push(`../Search/${searchstate}`);
      openNavbarClick();
    }
  };
  const eraseHandler = () => {
    setSearchstate("");
  };
  const setvalluehandler = (e) => {
    setSearchstate(e.target.value);
  };
  const openNavbarClick = () => {
    setOpenNavBar(!openNavBar);
    console.log(openNavBar);
  };
  // console.log(sizePaage);
  if (sizePaage >= 768) {
    return (
      <div className={`${styles.outer_Conteiner}`}>
        <div className={`${styles.logo_img}`}>
          <Image
            src="/images/—Pngtree—cute dark movie camera_4545778.png"
            width={60}
            height={60}
          />
        </div>
        <div className={`${styles.info_nav}`}>
          <div className={`${styles.search_Div}`}>
            <input
              type="text"
              value={searchstate}
              onKeyDown={enterHandler}
              onChange={setvalluehandler}
              onBlur={eraseHandler}
            />

            <FaSearch className={`${styles.spam}`} />
          </div>
          <h5>
            {" "}
            <Link href={"../"}>
              Home
              <samp>
                <GrDomain />
              </samp>
            </Link>
          </h5>
          <h5>
            {" "}
            <Link href={"../genrePage"}>
              Gener
              <samp>
                <GiDramaMasks />
              </samp>
            </Link>
          </h5>
          <h5>
            <Link href={"../containermovie"}>
              {" "}
              My Movies
              <samp>
                <RiFolderUserFill />
              </samp>
            </Link>
          </h5>
          <Link href={"../loginPage"}>Login</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.menu_click_open}`}>
        <h1 onClick={openNavbarClick}>
          <IoMenu />
        </h1>
        <div
          className={
            openNavBar === true
              ? `${styles.main_Nav_Resp_Div} ${styles.active} `
              : `${styles.main_Nav_Resp_Div}`
          }
        >
          <div className={`${styles.close_nave_Icon}`}>
            {" "}
            <IoCloseSharp onClick={openNavbarClick} />
          </div>
          <div className={`${styles.body_resp_Div}`}>
            <div className={`${styles.res_Search_Div}`}>
              <input
                type="text"
                value={searchstate}
                onKeyDown={enterHandler}
                onChange={setvalluehandler}
                onBlur={eraseHandler}
              />
              <FaSearch className={`${styles.spam}`} />
            </div>
            <ul className={`${styles.nave_ul}`} onClick={openNavbarClick}>
              <Link href={"../"}>
                <li>
                  <samp>
                    <GrDomain />
                  </samp>
                  Home{" "}
                </li>
              </Link>
              <Link href={"../genrePage"}>
                <li>
                  <samp>
                    <GiDramaMasks />
                  </samp>
                  Geners
                </li>
              </Link>
              <Link href={"../containermovie"}>
                <li>
                  {" "}
                  <samp>
                    <RiFolderUserFill />
                  </samp>
                  My Movies
                </li>
              </Link>
              <Link href={"../loginPage"}>
                <li>Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
