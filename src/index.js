import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.scss";
import { BrowserRouter } from 'react-router-dom';
import SiteContext from "./context/SiteContext";
import { Provider } from 'react-redux';
import store from './stores/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SiteContext>
        <App />
      </SiteContext>
    </BrowserRouter>
  </Provider>
);