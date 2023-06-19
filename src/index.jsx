import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/metropolis';
import '@fontsource/metropolis/500.css';
import '@fontsource/metropolis/600.css';
import '@fontsource/metropolis/700.css';
import '@fontsource/metropolis/800.css';
import App from '/src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
