import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ReservationProvider } from './context/ReservationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReservationProvider>
        <App />
      </ReservationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
