import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {ContextProvider} from './pages/ecommerce-capstone/Context'

import { GlobalStyles } from './global-styles';

import {BrowserRouter as Router} from "react-router-dom"
import { FirebaseContextProvider } from './context/firebase';

import * as serviceWorker from './serviceWorker';




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
    <FirebaseContextProvider>
        <ContextProvider> 
            <Router> 
                <GlobalStyles /> 
                <App />
            </Router> 
        </ContextProvider>
    </FirebaseContextProvider>, 
    document.getElementById('root')
)