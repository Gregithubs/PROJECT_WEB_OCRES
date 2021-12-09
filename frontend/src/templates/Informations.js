import React from 'react';
import Layout from '../Components/Layout'

const Informations = () => {
  return (
    <Layout>
      <textearea className="about">
        <h1>Qui sommes-nous?</h1><br />
        Nous sommes Crypto'cres, une société de génération de leads et 
        de marketing d’affiliation opérant dans une pléthore de secteurs verticaux de grande valeur basée à Paris.<br /><br />
        
        <h1>Adresse</h1><br />
        Crypto'cres<br />
        Company number : 000001<br />
        37 Quai de Grenelle<br />
        75015<br />
        Paris<br />
        France<br /><br />

        <h1>Numéro de téléphone</h1><br />
        +33 6 00 00 00 01<br /><br />

        <h1>Adresse mail</h1><br />
        cryptocres@gmail.com<br />
        </textearea>

        <textearea className="merci">
        Ce site a été fait avec amour par Biron Emilien et Pateyron Grégoire !
      </textearea>
    </Layout>
  )
}

export default Informations;