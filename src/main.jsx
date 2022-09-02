import React from 'react'; //imr
import ReactDOM from 'react-dom/client'; //imp
import './styles.css';

// import  { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp'


//renderizar
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 0 }/>
    </React.StrictMode>   
);