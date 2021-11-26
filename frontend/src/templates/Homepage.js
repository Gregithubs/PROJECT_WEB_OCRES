import React, { useEffect, useState } from 'react';
import axios from "axios"
import millify from "millify"

import SummaryCard from "../Components/SummaryCard"
import Layout from "../Components/Layout"

import { apiKey } from "../api/nomicsApi"

const Homepage = () => {
  const [dataApi, setDataApi] = useState(null)
  const [dataApi2, setDataApi2] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,SOL,BNB,XTZ,NEO,ICP&interval=1d,30d&convert=EUR&per-page=100&page=1`)
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
          (
            <div className="row2">
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
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