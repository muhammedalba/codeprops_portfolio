import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import './scss/index.scss';

import LoadingPage from './components/LoadingPage/LoadingPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <React.Suspense fallback={<LoadingPage />}>
      <App />
    </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

