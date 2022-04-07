import React from 'react';
import ReactDOM from 'react-dom/client';
//import de la feuille de style de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'
import './css/toDo.css';

// createRoot est importé via ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'));

//injecte l'App dans la div 'root' de index.html
root.render(<App />);