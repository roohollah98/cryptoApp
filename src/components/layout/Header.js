import React, { useContext } from "react";
import "./layout.css";
import "./header.css";
import { CoinContext } from "../../context/coinContext";
const Header = () => {
  var txt = "CRYPTON";
  const { currency, setCurrency } = useContext(CoinContext);

  return (
    <header className="header">
      <div className="logoContainer">
        <div className="logo"></div>
        <div className="text">
          <p>
            {txt.split("").map((char, index) => (
              <b key={index} style={{ transform: `rotate(${index * 28}deg)` }}>
                {char}
              </b>
            ))}
          </p>
        </div>
      </div>
      <nav className="menu">
        <div
          onClick={() => {
            if (currency === "usd") {
              setCurrency("eur");
            } else {
              setCurrency("usd");
            }
          }}
          className="menuItem"
        >
          <span className={currency === "usd" ? "selected" : ""}>usd </span> /{" "}
          <span className={currency === "eur" ? "selected" : ""}> eur</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
