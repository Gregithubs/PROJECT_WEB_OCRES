import React from 'react';
import Layout from "../Components/Layout"
var image=require('./jeandidier.jpg')

const User = () => {

  return (
        <Layout>
            <textearea className="about-user">
                <h1>Page de profil</h1><br />
            Bienvenue sur votre Profil ! Ici vous pourrez voir votre portefeuille et son évolution. <br />
            Vous pourrez aussi aller regarder le portefeuilles de vos amis et voir si leurs investissements se portent bien!<br /><br />
            <h1>Infos</h1>
            <img class="jeandidier" src={image} alt="la tête de jean-didier notre meilleur client" /> <br /> <br />
            <div className="infos-profil">
              Nom : Jean-Didier CryptoTrader <br />
              Sexe : Homme <br />
              Age : 36 ans <br />
              Localisation : Paris, France<br />
              Status : Célibataire<br />
              Numéro de téléphone : +33 7 99 99 99 91<br />
              E-mail : jeandidieradorelacryptomonnaie@gmail.com
            </div>
            </textearea>

            <textearea className="amis">
            Vos Relations:<br /><br />
            - Jean Crypto <br />
            - Candy Tu <br />
            - Alain Verse <br />
            - Barack Afritt <br />
            - Yves Héron <br />
            - Élise Émoi <br />
            </textearea>
        </Layout>
  )
}

export default User;
