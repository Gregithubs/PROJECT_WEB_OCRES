import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './templates/Homepage';
import User from './templates/User';
import News from './templates/News';
import Informations from './templates/Informations';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user" element={<User />} />
      <Route path="/news" element={<News />} />
      <Route path="/informations" element={<Informations />} />
      {/* Ajouter des Routes (pages) en plus pour utiliser la navigation react router */}
      {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
    </Routes>
  </BrowserRouter>,
  rootElement
);