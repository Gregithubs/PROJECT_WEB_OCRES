import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './templates/Homepage';
import User from './templates/User';
import Informations from './templates/Informations';
import Signin from './templates/Signin';
import Wallet from './templates/Wallet';
import Signup from './templates/Signup';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/home" element={<Homepage />} />
      <Route path="/user" element={<User />} />
      <Route path="/informations" element={<Informations />} />
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/signup" element={<Signup/>}/>
      {/* Ajouter des Routes (pages) en plus pour utiliser la navigation react router */}
      {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
    </Routes>
  </BrowserRouter>,
  rootElement
);