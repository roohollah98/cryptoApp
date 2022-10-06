import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TrendsCoinContextProvider from "./context/TrendsCoinContext";
import './responsive/responsive.css'
import CoinContextProvider from "./context/coinContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <TrendsCoinContextProvider>
<CoinContextProvider>

      <App />
</CoinContextProvider>
    </TrendsCoinContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
