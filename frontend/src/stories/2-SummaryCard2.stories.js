import React from 'react';
import SummaryCard2 from '../Components/summaryCard2';

export default {
  title: 'SummaryCard2',
};

const obj = {
  "id": "BTC",
  "currency": "BTC",
  "symbol": "BTC",
  "name": "Bitcoin",
  "logo_url": "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
  "status": "active",
  "price": "49696.86788425",
  "price_date": "2021-11-24T00:00:00Z",
  "price_timestamp": "2021-11-24T14:47:00Z",
  "circulating_supply": "18882050",
  "max_supply": "21000000",
  "market_cap": "938378744234",
  "market_cap_dominance": "0.4037",
  "num_exchanges": "404",
  "num_pairs": "79605",
  "num_pairs_unmapped": "5799",
  "first_candle": "2011-08-18T00:00:00Z",
  "first_trade": "2011-08-18T00:00:00Z",
  "first_order_book": "2017-01-06T00:00:00Z",
  "rank": "1",
  "rank_delta": "0",
  "high": "58437.17097330",
  "high_timestamp": "2021-11-08T00:00:00Z",
  "1d": {
      "volume": "36366012545.94",
      "price_change": "-1923.18494767",
      "price_change_pct": "-0.0373",
      "volume_change": "-9915843810.28",
      "volume_change_pct": "-0.2142",
      "market_cap_change": "-36263964230.36",
      "market_cap_change_pct": "-0.0372"
  },
  "30d": {
      "volume": "1190989131083.84",
      "price_change": "-4699.92413865",
      "price_change_pct1": "-0.0864",
      "volume_change": "-118783569103.36",
      "volume_change_pct": "-0.0907",
      "market_cap_change": "-87217339026.97",
      "market_cap_change_pct": "-0.0850"
  }
}


export const text = () => <SummaryCard2 currencyData={obj}/>;

export const empty = () => (
  <SummaryCard2 />
);