import React, { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";
import * as dayjs from "dayjs";
import "dayjs/locale/fr";
import SummaryCard from "../Components/SummaryCard";
import Layout from "../Components/Layout";
import { apiKey } from "../api/nomicsApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

dayjs().locale("fr");
dayjs().format();

const Homepage = () => {
  const [dataApi, setDataApi] = useState(null);
  const [dataApi2, setDataApi2] = useState(null);
  const [dataGraph, setDataGraph] = useState([]);
  const [timeInterval, setTimeInterval] = useState("7d");
  
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=AVAX,BNB,LTC,SOL,BCH,EGLD&interval=1d,7d,30d,365d,ytd&convert=EUR&per-page=100&page=1`
      )
      .then((res) => {
        const items = res.data;
        setDataApi(items);
      });

    axios
      .get("https://coinranking1.p.rapidapi.com/stats", {
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
        },
      })
      .then((res) => {
        const items = res.data.data;
        setDataApi2(items);
      });

    axios
      .get("https://coinranking1.p.rapidapi.com/coin/14/history/"+timeInterval, {
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
        },
      })
      .then((res) => {
        const items = res.data.data.history;
        axios
          .get("https://coinranking1.p.rapidapi.com/coin/4/history/"+timeInterval, {
            headers: {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key":
                "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
            },
          })
          .then((response) => {
            const items_2 = response.data.data.history;
            axios
            .get("https://coinranking1.p.rapidapi.com/coin/72208/history/"+timeInterval, {
            headers: {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key":
                "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
            },
            })
            .then((response) => {
              const items_3 = response.data.data.history;
              axios
              .get("https://coinranking1.p.rapidapi.com/coin/68905/history/"+timeInterval, {
              headers: {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key":
                  "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
              },
              })
              .then((response) => {
                const items_4 = response.data.data.history;
                axios
                .get("https://coinranking1.p.rapidapi.com/coin/7/history/"+timeInterval, {
                headers: {
                  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                  "x-rapidapi-key":
                    "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
                },
                })
                .then((response) => {
                  const items_5 = response.data.data.history;
                  axios
                  .get("https://coinranking1.p.rapidapi.com/coin/70974/history/"+timeInterval, {
                  headers: {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key":
                      "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
                  },
                  })
                  .then((response) => {
                    const items_6 = response.data.data.history;

                  const data = [];
                  for (let i = 0; i < items.length; i++) {
                    const a = new Date(items[i].timestamp);
                    data.push({
                      timestamp: a.toDateString() + " " + a.toLocaleTimeString(),
                      bnb: items[i].price,
                      bch: items_2[i].price,
                      egld: items_3[i].price,
                      sol: items_4[i].price,
                      ltc: items_5[i].price,
                      avax: items_6[i].price,
                    });
                  }
            setDataGraph(data);
              });
            });
          });
        });
      });
    });
  }, [timeInterval]);

  return (
    <Layout>
      <main className="widgets">
        {dataApi && (
          <div className="row">
            <SummaryCard currencyData={dataApi[0]} />
            <SummaryCard currencyData={dataApi[1]} />
            <SummaryCard currencyData={dataApi[2]} />
          </div>
        )}
        {dataApi && (
          <div className="row">
            <SummaryCard currencyData={dataApi[3]} />
            <SummaryCard currencyData={dataApi[4]} />
            <SummaryCard currencyData={dataApi[5]} />
          </div>
        )}
        {dataApi && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataGraph}>
              <CartesianGrid strokeDasharray="1 10" />
              <XAxis dataKey="timestamp" tick={false}/>
              <YAxis />
              <Tooltip
                labelStyle={{ color: "#000000" }}
                cursor={{ stroke: "red", strokeWidth: 2 }}
              />
              <Legend />
              <Line type="monotone" dataKey="bnb" stroke="#FF5733" unit=" $" dot={false}/>
              <Line type="monotone" dataKey="bch" stroke="#8401EF" unit=" $" dot={false}/>
              <Line type="monotone" dataKey="egld" stroke="#004CFF" unit=" $" dot={false}/>
              <Line type="monotone" dataKey="sol" stroke="#04B5F9" unit=" $" dot={false}/>
              <Line type="monotone" dataKey="ltc" stroke="#FF33E0" unit=" $" dot={false}/>
              <Line type="monotone" dataKey="avax" stroke="#03D502" unit=" $" dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        )}
      </main>
      <div className="containerT">
        <nav className="total">
          <ul>
            <div>Total Cryptocurrencies</div>
            {dataApi2 ? millify(dataApi2.totalCoins) : null}<br />
            <div>Total Exchanges</div>
            {dataApi2 ? millify(dataApi2.totalExchanges) : null}<br />
            <div>Total Market</div>
            {dataApi2 ? `$ ${millify(dataApi2.totalMarkets)}` : null}<br />
            <div>Total Market Cap</div>
            {dataApi2 ? `$ ${millify(dataApi2.totalMarketCap)}` : null}<br />
            <div>Total 24h Volume</div>
            {dataApi2 ? `$ ${millify(dataApi2.total24hVolume)}` : null}<br /><br />
            <div>Change time interval</div>
            <select onChange={(e) => {
              setTimeInterval(e.target.value)
            }}>
              <option value="7d">7 Days</option>
              <option value="30d">1 Month</option>
            </select>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Homepage;
