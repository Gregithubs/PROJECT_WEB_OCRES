import React from 'react'
import "./index.css"

const SummaryCard2 = ({ currencyData = {
    name: "",
    price: "",
    logo_url: "",
} }) => {
    const {
        name,
        price,
        logo_url,
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
                <p>Amount : </p>
                <p>Solde : $</p>
            </div>
        </div>)
    }

    const priceFormatted = (Math.round(price * 100) / 100).toFixed(1)
    const soldeFormatted = (Math.round(price * num_exchanges * 0.18) / 100).toFixed(1)

    return (
        <div className="container">
            <div className="title-container">
                <img src={logo_url} alt="" width={30} height={30} />
                <p>{name}</p>
            </div>
            <div className="info-container">
                <p>Price : $ {priceFormatted}</p>
                <p>Amount : {(Math.round(num_exchanges * 0.18) / 100).toFixed(2)}</p>
                <p>Solde : $ {soldeFormatted}</p>
            </div>
        </div>
    )
}

export default SummaryCard2;