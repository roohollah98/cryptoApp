import React, { createContext,useState } from "react";
export const CoinContext = createContext();
const CoinContextProvider = (props) => {
    const [currency, setCurrency] = useState("usd");
  return (
    <CoinContext.Provider value={{currency, setCurrency}}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
