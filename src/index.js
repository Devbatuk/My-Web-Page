import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.scss";
import { BrowserRouter,Route,Router } from 'react-router-dom';
import Okul from './Pages/Okul';
import Anasayfa from './Pages/Anasayfa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);