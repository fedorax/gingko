import React from 'react';
import ReactDOM from 'react-dom/client';
import "@ibm/plex/scss/ibm-plex.scss";
import "bootstrap";
import './assets/scss/custom.scss';
import "bootstrap/scss/bootstrap.scss";

import "./assets/scss/index.scss";
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
