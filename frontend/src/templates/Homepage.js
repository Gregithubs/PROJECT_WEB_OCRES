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

      <main style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px", justifyContent: "center" }}>
        {dataApi &&
          (
            <div style={{ display: "flex", gap: "1rem" }}>
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
        }
        {dataApi &&
          (
            <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "1rem" }}>
              <SummaryCard currencyData={dataApi[0]} />
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
        }
        {dataApi &&
          (
            <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "1rem" }}>
              <SummaryCard currencyData={dataApi[0]} />
            </div>
          )
        }
      </main>
    </Layout>
  )
}

export default Homepage;