import React, { useEffect, useState } from 'react';
import axios from "axios"
import Layout from "../Components/Layout"


import { apiKey } from "../api/nomicsApi"

const Informations = () => {
  const [dataApi, setDataApi] = useState(null)

  useEffect(() => {
    axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1`)
      .then((res) => {
        const items = res.data;
        setDataApi(items);
      })

  }, []);
  return (
        <Layout>
            <textearea className="about">
                <h1>Qui sommes-nous?</h1><br />
            Nous sommes ECE Crypto, une société de génération de leads et 
            de marketing d’affiliation opérant dans une pléthore de secteurs verticaux de grande valeur basée à Paris.<br /><br />
            
            <h1>Adresse</h1><br />
            ECE Crypto<br />
            Company number: 000001<br />
            37 Quai de Grenelle<br />
            75015<br />
            Paris<br />
            France<br /><br />

            <h1>Numéro de téléphone</h1><br />
            +33 6 00 00 00 01<br /><br />

            <h1>Adresse mail</h1><br />
            ece.crypto@gmail.com<br />
            </textearea>

            <textearea className="merci">
            Ce site a été fait avec amour par Biron Emilien et Pateyron Grégoire !
            </textearea>
        </Layout>
  )
}

export default Informations;