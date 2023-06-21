// React Core
import React from 'react';
import ReactDOM from 'react-dom/client';
// Main App
import App from './App';
// Styles
import './assets/style/index.scss';
// React Dom
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
// Renderer
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
