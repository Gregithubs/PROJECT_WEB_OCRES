import React, { useEffect, useState } from 'react';
import axios from "axios"

import SummaryCard from "../Components/SummaryCard"
import Layout from "../Components/Layout"


import { apiKey } from "../api/nomicsApi"

const Homepage = () => {
  const [dataApi, setDataApi] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1`)
      .then((res) => {
        const items = res.data;
        setDataApi(items);
      })
  }, []);

  return (
    <Layout>
      <main className="widgets">
        {dataApi &&
          (
            <div className="row1">
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
        }
        {dataApi &&
          (
            <div className="row2">
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
        }
        {dataApi &&
          (
            <div className="row3">
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
        }
      </main>
      <nav className = "total">
            <ul>
              <a>Total <br/>Cryptocurrencies</a><br/>
              <a></a><br/><br/>

              <a>Total Exchanges</a><br/>
              <a></a><br/><br/>

              <a>Total Market Cap</a><br/>
              <a></a><br/><br/>

              <a>Total 24h Volume</a><br/>
              <a></a><br/><br/>
            </ul>
          </nav>
    </Layout>
  )
}

export default Homepage;