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
      <span className={style.imageContainer}>
        <img src={image} alt={name} />
        <i> </i>
      </span>
      <p className={style.coinName}><span>Name: </span>{name}</p>
      <p className={style.coinSymbol}><span>Symbol: </span>{symbol.toUpperCase()}</p>
      <p className={style.currentPrice}><span>Current Price: </span>${current_price.toLocaleString()}</p>
      <p
        className={
          price_change_percentage_24h > 0
            ? style.greenPriceChange
            : style.redPriceChange
        }
      >
      <span>price changes: </span>
        {`${price_change_percentage_24h.toFixed(2) }%`}
      </p>
      <p className={style.marketCap}><span>market cap: </span>{market_cap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
