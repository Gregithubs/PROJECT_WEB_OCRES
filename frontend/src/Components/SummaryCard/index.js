import React from 'react'
import * as R from 'ramda'
import "./index.css"

const SummaryCard = ({ currencyData = {
    name: "",
    price: "",
    logo_url: "",
} }) => {
    const {
        name,
        price,
        logo_url,
        rank,
        status,
        num_exchanges,
    } = currencyData
    if (name === "") {
        return (<div className="container">
            <div className="title-container">
                <img src={logo_url} alt="" width={30} height={30} />
                <p>Name</p>
            </div>
            <div className="info-container">
                <p>Price : $</p>
                <p>Evolution : %</p>
                <p>Exchanges : </p>
                <p>Status : </p>
                <p>Rank : </p>
            </div>
        </div>)
    }

    const { price_change_pct } = R.pathOr(null, ['1d'], currencyData)
    const priceFormatted = (Math.round(price * 100) / 100).toFixed(1)

    return (
        <div className="container">
            <div className="title-container">
                <img src={logo_url} alt="" width={30} height={30} />
                <p>{name}</p>
            </div>
            <div className="info-container">
                <p>Price : $ {priceFormatted}</p>
                <p>Evolution : {(Math.round(price_change_pct * 10000)/100).toFixed(2)}%</p>
                <div className="info-container-extra">
                    <p>Exchanges : {num_exchanges}</p>
                    <p>Status : {status}</p>
                    <p>Rank : {rank}</p>
                </div>
            </div>
            
        </div>
    )
}

export default SummaryCard;