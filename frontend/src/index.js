import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './templates/Homepage';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* Ajouter des Route (pages) en plus pour utiliser la navigation react router */}
      {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial */}
    </Routes>
  </BrowserRouter>,
  rootElement
);