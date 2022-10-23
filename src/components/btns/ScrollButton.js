import React, { useState, useEffect } from "react";
import style from "./btns.module.css";
const ScrollButton = () => {
  useEffect(() => {
    window.onscroll = () => {
      console.log(window.scrollY);
      if (window.pageYOffset > 500) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);
  const [scroll, setScroll] = useState(false);
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={scroll ? style.scrollBtn : style.hide}
    ></div>
  );
};

export default ScrollButton;
