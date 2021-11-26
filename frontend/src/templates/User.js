import React from 'react';
import Layout from "../Components/Layout"
var image=require('./jeandidier.jpg')
const Informations = () => {
  return (
        <Layout>
            <textearea className="about">
                <h1>Profil</h1><br />
            Bienvenue sur votre Profil ! Ici vous pourrez voir votre portefeuille et son évolution. Vous pourrez aussi aller regarder le portefeuilles de vos amis et voir si leurs investissements se portent bien!<br /><br />
            <h1>Informations</h1><br />
            Jean-Didier CryptoTrader
           <img class="jeandidier" src={image} alt="la tête de jean-didier notre meilleur client" /> <br />
            Homme <br />
            36 ans <br />
            Vis à : Paris, France<br />
            Célibataire<br />

            <h1>Numéro de téléphone</h1><br />
            +33 7 99 99 99 91<br /><br />

            <h1>Adresse mail</h1><br />
            jeandidieradorelacryptomonnaie@gmail.com<br />
            </textearea>

            <textearea className="amis">
            Vos Amis :
            </textearea>
        </Layout>
  )
}

export default Informations;
