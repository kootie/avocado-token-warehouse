import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import Montserrat font from Google Fonts
const font = document.createElement('link');
font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';
font.rel = 'stylesheet';
document.head.appendChild(font);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 