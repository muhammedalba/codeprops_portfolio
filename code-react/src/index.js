import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './scss/index.scss';
import '../src/i18n/i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

