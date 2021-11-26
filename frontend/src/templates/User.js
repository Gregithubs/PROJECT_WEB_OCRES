import React from 'react';
import Layout from "../Components/Layout"
import axios from "axios"
import millify from "millify"

var image=require('./jeandidier.jpg')
const User = () => {
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
            Vis à : Paris, France<br />
            Célibataire<br />
            +33 7 99 99 99 91<br /><br />
            jeandidieradorelacryptomonnaie@gmail.com<br />
            </textearea>

            <textearea className="amis">
            Vos Amis :
            </textearea>
        </Layout>
  )
}

export default User;
