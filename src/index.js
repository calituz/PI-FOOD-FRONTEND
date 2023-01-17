import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

import axios from "axios"

import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);


