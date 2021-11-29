import React, { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";

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

import * as dayjs from "dayjs";
import "dayjs/locale/fr";
dayjs().locale("fr");
dayjs().format();

const Homepage = () => {
  const [dataApi, setDataApi] = useState(null);
  const [dataApi2, setDataApi2] = useState(null);
  const [dataGrapĥ, setDataGraph] = useState([]);
  const [timeInterval, setTimeInterval] = useState("7d");
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,SOL,BNB,ZEC,NEO,ICP&interval=1d,30d&convert=EUR&per-page=100&page=1`
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
      .get("https://coinranking1.p.rapidapi.com/coin/1/history/"+timeInterval, {
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
        },
      })
      .then((res) => {
        const items = res.data.data.history;
        axios
          .get("https://coinranking1.p.rapidapi.com/coin/2/history/"+timeInterval, {
            headers: {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key":
                "c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971",
            },
          })
          .then((response) => {
            const items_2 = response.data.data.history;
            console.log(items);
            const data = [];
            for (let i = 0; i < items.length; i++) {
              const a = new Date(items[i].timestamp);
              data.push({
                timestamp: a.toDateString() + " " + a.toLocaleTimeString(),
                btc: items[i].price,
                eth: items_2[i].price,
              });
            }
            setDataGraph(data);
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
            <LineChart
              width={500}
              height={300}
              data={dataGrapĥ}
              margin={{
                top: 5,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="1 10" />
              <XAxis dataKey="timestamp" tick={false}/>
              <YAxis />
              <Tooltip
                labelStyle={{ color: "#000000" }}
                cursor={{ stroke: "red", strokeWidth: 2 }}
              />
              <Legend />
              <Line type="monotone" dataKey="btc" stroke="#82ca9d" unit=" $" dot={false}/>
              <Line type="monotone" dataKey="eth" stroke="#8884d8" unit=" $" dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        )}
      </main>
      <nav className="total">
        <ul>
          <div>Total Cryptocurrencies</div>
          {dataApi2 ? millify(dataApi2.totalCoins) : null}
          <div>Total Exchanges</div>
          {dataApi2 ? millify(dataApi2.totalExchanges) : null}
          <div>Total Market</div>
          {dataApi2 ? `$ ${millify(dataApi2.totalMarkets)}` : null}
          <div>Total Market Cap</div>
          {dataApi2 ? `$ ${millify(dataApi2.totalMarketCap)}` : null}
          <div>Total 24h Volume</div>
          {dataApi2 ? `$ ${millify(dataApi2.total24hVolume)}` : null}
          <div>Change time interval</div>
          <select onChange={(e) => {
            setTimeInterval(e.target.value)
          }}>
            <option value="7d">7 Days</option>
            <option value="1d">1 day</option>
            <option value="30d">1 month</option>
          </select>
        </ul>
      </nav>
    </Layout>
  );
};

export default Homepage;
