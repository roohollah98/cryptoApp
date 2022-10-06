import React, { useState, useEffect } from "react";
import { getChart } from "../../services/api";
import { Line } from "react-chartjs-2";
import style from "../detailPage/detailPage.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CoinChart = ({ coinId }) => {
  const [chartData, setChartData] = useState("");
  const [days, setDays] = useState(365);
  const fetchChart = async () => {
    setChartData(await getChart(coinId, days, "usd"));
  };
  useEffect(() => {
    fetchChart();
  }, [days]);
  console.log(chartData.prices);
  if (chartData) {
    return (
      <div className={style.container}>
        <Line
          data={{
            labels: chartData.prices.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: chartData.prices.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in usd`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
            responsive: true,
          }}
        />

        <div className={style.dayBtns}>
          <button className={days===1&&style.show} onClick={()=>{setDays(1)}}>24 Hours</button>
          <button className={days===30&&style.show} onClick={()=>{setDays(30)}}>30 days</button>
          <button className={days===90&&style.show} onClick={()=>{setDays(90)}}>3 months</button>
          <button className={days===365&&style.show} onClick={()=>{setDays(365)}}>365 days</button>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default CoinChart;
