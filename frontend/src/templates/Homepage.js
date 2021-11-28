import React, { useEffect, useState, PureComponent } from 'react';
import axios from "axios"
import millify from "millify"

import SummaryCard from "../Components/SummaryCard"
import Layout from "../Components/Layout"

import { apiKey } from "../api/nomicsApi"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thur',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Homepage = () => {
  const [dataApi, setDataApi] = useState(null)
  const [dataApi2, setDataApi2] = useState(null)

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
               data={dataApi.price}
               margin={{
                 top: 5,
                 right: 30,
                 left: 20,
                 bottom: 5,
               }}
             >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="time" />
               <YAxis dataKey= "price" />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
               <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
             </LineChart>
           </ResponsiveContainer>
        }
      </main>
      <nav className="total">
        <ul>
          <a>Total <br />Cryptocurrencies</a><br />
          <a></a>
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