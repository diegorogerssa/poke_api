import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import DataProvider from './contexts/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </HashRouter>
    
);


