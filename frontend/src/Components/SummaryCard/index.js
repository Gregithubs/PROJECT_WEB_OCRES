import React from 'react'
import * as R from 'ramda'

import "./index.css"

const SummaryCard = ({currencyData}) => {
    const {
        name,
        symbol,
        price,
        logo_url,
    } = currencyData
    const {price_change_pct} = R.pathOr(null, ['1d'], currencyData)
    const priceFormatted = (Math.round(price * 100) / 100).toFixed(2)

    console.log(currencyData)

    return (
        <div className="container">
            <div className="title-container">
                <img src={logo_url} alt="" width={30} height={30}/>
                <p>{symbol} / {name}</p>
            </div>
            <p>Price : $ {priceFormatted}</p>
            <p>Evolution : {price_change_pct}%</p>
        </div>
    )
}

export default SummaryCard