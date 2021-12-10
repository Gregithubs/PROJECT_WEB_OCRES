import React from 'react';
import Layout from '../Components/Layout';
import { Link } from "react-router-dom";
var axios =require('axios')
var image=require('./jeandidier.jpg')

const User = () => {
  var data = JSON.stringify({
    "username": "jeandidiercryptotrader@gmail.com"
  });
  var config = {
    method: 'delete',
    url: 'http://localhost:3001/users/delete',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  const deleteUser=() =>{
    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
  }
  return (
    <Layout>
        <textearea className="about-user">
          <h1>Page de Profil</h1><br />
          Bienvenue sur votre Profil ! Ici vous pouvez voir votre portefeuille et son évolution. <br />
          Vous pourrez aussi aller regarder le portefeuilles de vos amis et voir si leurs investissements se portent bien!<br /><br />
          <h1>Infos</h1>
          <img class="jeandidier" src={image} alt="" /> <br /> <br />
          <nav className="infos-profil">
            Nom : Jean-Didier CryptoTrader <br />
            Sexe : Homme <br />
            Age : 36 ans <br />
            Localisation : Paris, France <br />
            Statut : Célibataire <br />
            Numéro de téléphone : +33 7 99 99 99 91 <br />
            E-mail : jeandidieradorelacryptomonnaie@gmail.com
          </nav>
          <button className="btn1" id="profilBtn1" onClick={deleteUser()}>
          <Link to="/">Delete</Link>
          </button>
          <button className="btn2" id="profilBtn2">
            <Link to="/">Disconnect</Link> 
          </button>
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
  );
};

export default User;
