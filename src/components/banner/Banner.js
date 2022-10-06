import React, { useContext, useEffect } from "react";
import { CoinContext } from "../../context/coinContext";
import { TrendsContext } from "../../context/TrendsCoinContext";
import { getTrends } from "../../services/api";
import Slider from "../slider/slider";
import style from "./banner.module.css";
const Banner = () => {
  const { trendCoins, setTrend } = useContext(TrendsContext);
  const { currency } = useContext(CoinContext);
  console.log(currency);
  const fetchTrends = async () => {
    setTrend(await getTrends(currency));
  };
  useEffect(() => {
   
    fetchTrends();
  }, [currency]);

  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerContent}>
        <h2>CRYPTON</h2>
        <p>Get All The Info About Crypto Currency</p>
      </div>

      <Slider data={trendCoins} />
    </div>
  );
};

export default Banner;
