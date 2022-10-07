import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./slider.module.css";
const Slider = ({ data }) => {

  var r;
  const [pos, setPos] = useState(0);


  const leftHandler = () => {
    console.log("left");
    if (pos > -60) {
      setPos((prevState) => prevState - 15);
      console.log(pos);
    } else {
      setPos(0);
    }
  };

  const rightHandler = () => {
  
    if (pos < 0) {
      setPos((prevState) => prevState + 15);
      console.log(pos);
    } else {
      setPos(0);
    }
  };
  
  return (
    <div id={style.sliderContainer}>
      <div id={style.slider}>
        <div style={{ left: pos + "%" }} id={style.slides}>
          {data.map((coin) => {
            return (
              <Link key={coin.id} to={`/coinDetail/${coin.id}`}>

               <div key={coin.id} className={style.slideItem}>
                <span>
                  <img alt={coin.name} src={coin.image} />
                  <i></i>
                </span>
                <h3>{coin.name}</h3>
                <p>{coin.current_price}</p>
                <button>read more</button>
              </div>
              </Link>
            );
          })}
        </div>
        <div onClick={() => rightHandler()} id={style.right}></div>
        <div onClick={() => leftHandler()} id={style.left}></div>
      </div>
    </div>
  );
};

export default Slider;
