import React, {useEffect, useState} from 'react';
import axios from "axios"

import SummaryCard from "../Components/SummaryCard"

import {apiKey} from "../api/nomicsApi"

const Homepage = () => {
  const [dataApi, setDataApi] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1`)
    .then((res) => {
      const items = res.data;
      setDataApi(items);
    })
  }, []);

  console.log(dataApi)

  return (
    <>
      {/* C'est votre page principale */}
      {dataApi ? <SummaryCard currencyData={dataApi[0]} /> : null}
    </>
  )
}

export default Homepage;