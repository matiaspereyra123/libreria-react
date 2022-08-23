import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/app.css';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import LibrosApp from './components/LibrosApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <LibrosApp/>
    </BrowserRouter>
      
    
   
  </React.StrictMode>
);


