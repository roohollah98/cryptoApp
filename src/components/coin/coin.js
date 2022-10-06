import React from 'react'
import style from './coin.module.css'
const Coin = ({ data }) => {
  const {
    name,
    symbol,
    current_price,
    market_cap,
    price_change_percentage_24h,
    image,
  } = data;
  return (
    <div className={style.coinContainer}>
      <span>
        <img src={image} alt={name} />
        <i> </i>
      </span>
      <p>{name}</p>
      <p>{symbol.toUpperCase()}</p>
      <p className={style.currentPrice}>${current_price.toLocaleString()}</p>
      <p
        className={
          price_change_percentage_24h > 0
            ? style.greenPriceChange
            : style.redPriceChange
        }
      >
        {price_change_percentage_24h}
      </p>
      <p>{market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
