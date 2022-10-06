import axios from "axios";



const getCoins = async (currency) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  return response.data;
};

const getTrends = async (currency) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);

  return response.data;
};
const getSingleCoin = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  return response.data;
};
const getChart = async (id, days = 365, currency) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
  return response.data;
};
export { getCoins, getTrends, getSingleCoin, getChart };
