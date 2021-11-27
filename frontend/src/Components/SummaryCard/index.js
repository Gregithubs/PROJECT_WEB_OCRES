import React from 'react'
import * as R from 'ramda'

import "./index.css"

const SummaryCard = ({ currencyData = {
    name: "",
    symbol: "",
    price: "",
    logo_url: "",
} }) => {
    const {
        name,
        symbol,
        price,
        logo_url,
        rank,
        max_supply,
        num_exchanges,
    } = currencyData
    if (name === "") {
        return (<div className="container">
            <div className="title-container">
                <img src={logo_url} alt="" width={30} height={30} />
                <p>Symbol / Name</p>
            </div>
            <div className="info-container">
                <p>Price : $</p>
                <p>Evolution : %</p>
                <p>Exchanges : </p>
                <p>Max Supply : </p>
                <p>Rank : </p>
            </div>
        </div>)
    }

    const { price_change_pct } = R.pathOr(null, ['1d'], currencyData)
    const priceFormatted = (Math.round(price * 100) / 100).toFixed(2)

    return (
        <div className="container">
            <div className="title-container">
                <img src={logo_url} alt="" width={30} height={30} />
                <p>{symbol} / {name}</p>
            </div>
            <div className="info-container">
                <p>Price : $ {priceFormatted}</p>
                <p>Evolution : {price_change_pct}%</p>
                <p>Exchanges : {num_exchanges}</p>
                <p>Max Supply : {max_supply}</p>
                <p>Rank : {rank}</p>
            </div>
            
        </div>
    )
}

export default SummaryCard