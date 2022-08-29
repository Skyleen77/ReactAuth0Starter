import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="{DOMAIN}"
    clientId="{CLIENT_ID}"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
);
