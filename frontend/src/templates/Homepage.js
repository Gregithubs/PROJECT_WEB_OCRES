import React, { useEffect, useState } from 'react';
import axios from "axios"
import millify from "millify"

import SummaryCard from "../Components/SummaryCard"
import Layout from "../Components/Layout"

import { apiKey } from "../api/nomicsApi"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Homepage = () => {
  const [dataApi, setDataApi] = useState(null)
  const [dataApi2, setDataApi2] = useState(null)
  const [dataApi3, setDataApi3] = useState(null)
  const [dataApi4, setDataApi4] = useState(null)
  useEffect(() => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,SOL,BNB,ZEC,NEO,ICP&interval=1d,30d&convert=EUR&per-page=100&page=1`)
      .then((res) => {
        const items = res.data;
        setDataApi(items);
      })

    axios.get("https://coinranking1.p.rapidapi.com/stats", {
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
      }
    })
      .then((res) => {
        const items = res.data.data;
        setDataApi2(items);
      })

      axios.get("https://coinranking1.p.rapidapi.com/coin/1/history/7d", {
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971'
      }
      })
      .then((res) => {
        const items = res.data.data.history;
        const items_restructured = items.map(itm => {
            return {
                timestamp: itm.timestamp,                
                Price: itm.price
        }})
        setDataApi3(items_restructured);
      })

      axios.get("https://coinranking1.p.rapidapi.com/coin/3/history/7d", {
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971'
      }
      })
      .then((res) => {
        const items = res.data.data.history;
        const items_restructured = items.map(itm => {
            return {
                timestamp: itm.timestamp,
                Price2: itm.price
        }})
        setDataApi4(items_restructured);
      })

  }, []);

  return (
    <Layout>
      <main className="widgets">
        {dataApi &&
          (
            <div className="row1">
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[1]} />
              <SummaryCard currencyData={dataApi[2]} />
            </div>
          )
        }
        {dataApi &&
          (
            <div className="row1">
              <SummaryCard currencyData={dataApi[3]} />
              <SummaryCard currencyData={dataApi[4]} />
              <SummaryCard currencyData={dataApi[5]} />
            </div>
          )
        }
        {dataApi &&
             <ResponsiveContainer width="100%" height="100%">
             <LineChart
                width={500}
                height={300}
                data={dataApi3 , dataApi4}
                margin={{
                  top: 5,
                  right: 30,
                  left: 30,
                  bottom: 5,
               }}
             >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="timestamp" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="Price" stroke="#82ca9d" />
               <Line type="monotone" dataKey="Price2" stroke="#8884d8" />
             </LineChart>
           </ResponsiveContainer>
        }
      </main>
      <nav className="total">
        <ul>
          <a>Total <br />Cryptocurrencies</a><br />
          <a></a>m
          {dataApi2 ? millify(dataApi2.totalCoins) : null}
          <br /><br />
          <a>Total Exchanges</a><br />
          <a></a>
          {dataApi2 ? millify(dataApi2.totalExchanges) : null}
          <br /><br />
          <a>Total Market</a><br />
          <a></a>
          {dataApi2 ? `$ ${millify(dataApi2.totalMarkets)}` : null}
          <br /><br />
          <a>Total Market Cap</a><br />
          <a></a>
          {dataApi2 ? `$ ${millify(dataApi2.totalMarketCap)}` : null}
          <br /><br />
          <a>Total 24h Volume</a><br />
          <a></a>
          {dataApi2 ? `$ ${millify(dataApi2.total24hVolume)}` : null}
          <br /><br />
        </ul>
      </nav>
    </Layout>
  )
}

export default Homepage;
