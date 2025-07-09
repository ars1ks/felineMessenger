// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css'; // Глобальные стили
import 'boxicons/css/boxicons.min.css'; // Boxicons
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);