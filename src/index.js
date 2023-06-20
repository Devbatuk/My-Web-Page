import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.scss";
import { BrowserRouter } from 'react-router-dom';
import SiteContext from "./context/SiteContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SiteContext>
      <App />
    </SiteContext>
  </BrowserRouter>
);