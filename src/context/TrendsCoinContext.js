import React,{useState} from 'react'

export const TrendsContext=React.createContext();
const TrendsCoinContextProvider = (props) => {

    const [trendCoins, setTrend] = useState([]);
   
  return (
    <TrendsContext.Provider value={{trendCoins,setTrend}}>{props.children}</TrendsContext.Provider>
  )
}

export default TrendsCoinContextProvider