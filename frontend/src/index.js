import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './templates/Homepage';
import User from './templates/User';
import Informations from './templates/Informations';
import Signin from './templates/Signin';
import Wallet from './templates/Wallet';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user" element={<User />} />
      <Route path="/informations" element={<Informations />} />
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Wallet" element={<Wallet/>}/>
      {/* Ajouter des Routes (pages) en plus pour utiliser la navigation react router */}
      {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
    </Routes>
  </BrowserRouter>,
  rootElement
);