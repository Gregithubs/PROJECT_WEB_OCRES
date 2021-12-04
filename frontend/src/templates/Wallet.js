import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryCard2 from "../Components/SummaryCard2";
import Layout from "../Components/Layout";
import { apiKey } from "../api/nomicsApi";

const Wallet = () => {
  const [dataApi, setDataApi] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=AVAX,BNB,LTC,SOL,BCH,EGLD&interval=1d,7d,30d,365d,ytd&convert=EUR&per-page=100&page=1`
      )
      .then((res) => {
        const items = res.data;
        setDataApi(items);
      });
    }, );

  return (
    <Layout>
      <main className="widgets">
        {dataApi && (
          <div className="row">
            <SummaryCard2 currencyData={dataApi[0]} />
            <SummaryCard2 currencyData={dataApi[1]} />
            <SummaryCard2 currencyData={dataApi[2]} />
          </div>
        )}
        {dataApi && (
          <div className="row">
            <SummaryCard2 currencyData={dataApi[3]} />
            <SummaryCard2 currencyData={dataApi[4]} />
            <SummaryCard2 currencyData={dataApi[5]} />
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Wallet;
