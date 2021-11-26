import React, { useEffect, useState } from 'react';
import Layout from "../Components/Layout"
import axios from "axios"
import millify from "millify"
import { apiKey } from "../api/nomicsApi"
import SummaryCard from "../Components/SummaryCard"
var image=require('./jeandidier.jpg')
const User = () => {
  const [dataApi, setDataApi] = useState(null)
  const [dataApi2, setDataApi2] = useState(null)
  useEffect(() => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,BNB,NEXO,NEO,HEX&interval=1d,30d&convert=EUR&per-page=100&page=1`)
      .then((res) => {
        const items = res.data;
        setDataApi(items);
      })

    axios.get("https://coinranking1.p.rapidapi.com/stats", {
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
      }
    })
      .then((res) => {
        const items = res.data.data;
        setDataApi2(items);
      })

  }, []);
  return (
        <Layout>
            <textearea className="about-user">
                <h1>Page de profil</h1><br />
            Bienvenue sur votre Profil ! Ici vous pourrez voir votre portefeuille et son évolution. Vous pourrez aussi aller regarder le portefeuilles de vos amis et voir si leurs investissements se portent bien!<br /><br />
            <h1>Infos</h1><br />
            Jean-Didier CryptoTrader
           <img class="jeandidier" src={image} alt="la tête de jean-didier notre meilleur client" /> <br />
            Homme <br />
            36 ans <br />
            Vit à : Paris, France<br />
            Célibataire<br />
            +33 7 99 99 99 91<br /><br />
            jeandidieradorelacryptomonnaie@gmail.com<br />
            </textearea>

            <textearea className="amis">
            Vos Relations :
            </textearea>
        </Layout>
  )
}

export default User;
