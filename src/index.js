import React from 'react';
import ReactDOM from 'react-dom';
//import de la feuille de style de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'
import './css/toDo.css';



//injecte l'App dans la div 'root' de index.html
ReactDOM.render(<App />, document.getElementById('root'));