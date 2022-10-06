import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { getSingleCoin } from "../../services/api";
import style from "./detailPage.module.css";
import img from "../../images/car/01.png";
import CoinChart from "../coinChart/CoinChart";
import BackBtn from "../btns/backButton";
const DetailPage = () => {
  const [singleCoin, setSingleCoin] = useState({});
  const { coinId } = useParams();

  const fetchSingleCoin = async () => {
    setSingleCoin(await getSingleCoin(coinId));
  };
  useEffect(() => {
    fetchSingleCoin();
  }, []);
  // console.log(chart);
  console.log(singleCoin);
  if (singleCoin) {
    return (
      <div className={style.detailContainer}>
        <section className={style.coinInfo}>
          <div className={style.top}>
            <figure>
              <img src={singleCoin.image?.large} />
              {/* <img src={img} /> */}
            </figure>
            <h2>{singleCoin.name}</h2>
          </div>

          <p
            className={style.desc}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(singleCoin.description?.en.split(". ")[0]),
            }}
          />
          <p>
            <span>Rank: </span>
            {singleCoin.market_cap_rank}
          </p>
          <p>
            <span>current price: </span>$
            {singleCoin.market_data?.current_price.usd}
          </p>
          <p>
            <span>market cap: </span>
            {singleCoin.market_data?.market_cap.usd.toLocaleString()}
          </p>
        </section>
        <section className={style.chartContainer}>
          <CoinChart coinId={coinId} />
        </section>
        <BackBtn/>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default DetailPage;
