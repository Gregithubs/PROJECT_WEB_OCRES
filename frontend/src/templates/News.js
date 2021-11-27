import React, { useEffect, useState } from 'react';
import axios from "axios"
import Layout from "../Components/Layout"

const News = () => {
  const [dataApi, setDataApi] = useState(null)

  useEffect(() => {
    axios.get("https://bing-news-search1.p.rapidapi.com/news", {
      headers: {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'c75bfb7a18msh8c51fe9e891ca40p104a36jsnfb1c942a4971'
      }
    })
      .then((res) => {
        const items = res.data.data;
        setDataApi(items);
      })

  }, []);
  return (
    <Layout>
      <main className="widgets">
        {dataApi &&
          (
            <div className="row1">

            </div>
          )
        }
        {dataApi &&
          (
            <div className="row1">

            </div>
          )
        }
      </main>
    </Layout>
  )
}

export default News;