import React from 'react'
import * as R from 'ramda'

import "./index.css"

const SummaryNews = ({ newsData = {
    type: "",
    name: "",
    url: "",
    image: "",
} }) => {
    const {
        name,
        image,
    } = newsData
    if (name === "") {
        return (<div className="container">
            <div className="title-container">
                <img src={news.image.thumbnail.contentUrl} alt="" width={30} height={30} />
                <p>{news.image.thumbnail.contentUrl} / {news.name}</p>
            </div>
            <p>news.description</p>
        </div>)
    }

    return (
        <div className="container">
            <div className="title-container">
                <img src={news.image.thumbnail.contentUrl} alt="" width={30} height={30} />
                <p>{news.image.thumbnail.contentUrl} / {news.name}</p>
            </div>
            <p>news.description</p>
        </div>
    )
}

export default SummaryCard