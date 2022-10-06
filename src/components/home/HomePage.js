import React, { useState, useEffect, useContext } from "react";
import Coin from "../coin/coin";
import Layout from "../layout";

import { getCoins } from "../../services/api";

import style from "./HomePage.module.css";
import Banner from "../banner/Banner";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { CoinContext } from "../../context/coinContext";
import ScrollButton from "../btns/ScrollButton";

const HomePage = () => {
  const [value, setValue] = useState("");
  const [coinsList, setCoinsList] = useState([]);
  const [pageNumber, setPage] = useState(1);
  const perpage = 10;
const {currency}=useContext(CoinContext);
 
  useEffect(() => {
    const fetchCoinList = async () => {
      setCoinsList(await getCoins(currency));
    };

    fetchCoinList();

    console.log(coinsList);
  }, [currency]);

  const newCoinsList = coinsList.filter((coin) =>
    coin.name.toLowerCase().includes(value.toLowerCase())
  );

  console.log("new Coins List", newCoinsList);
  return (
    <Layout>
      <div className={style.homeContainer}>
        <Banner />
    
        <h2>Cryptocurrency Prices by Market Cap</h2>
        <div className={style.inputContainer}>
          <input
        
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setPage(1);
            }}
          />

        
        </div>
         
        <div className={style.coinBox}>
          {newCoinsList
            .slice((pageNumber - 1) * perpage, (pageNumber - 1) * perpage + perpage)
            .map((coin) => {
              return (
                <Link key={coin.id} to={`/coinDetail/${coin.id}`}>
                  <Coin key={coin.id} data={coin} />
                </Link>
              );
            })}
        </div>
        {
          newCoinsList.length>perpage+1&&
        <Pagination coinNumbers={newCoinsList.length} perPage={perpage} setPageNumber={setPage} pageNumber={pageNumber}/>
        
        }
      <ScrollButton />
      </div>
    </Layout>
  );
};

export default HomePage;