import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {ContextProvider} from './pages/landing/ecommerce-capstone/Context'
import { GlobalStyles } from './global-styles';

import {BrowserRouter as Router} from "react-router-dom"
import { FirebaseContext } from './context/firebase';

import * as serviceWorker from './serviceWorker';


const config = {
    apiKey: "AIzaSyBXXZP4ogVJ0B3W3RhvqfqxtC8saaqBSYA",
    authDomain: "react-example-blog.firebaseapp.com",
    databaseURL: "https://react-example-blog.firebaseio.com",
    projectId: "react-example-blog",
    storageBucket: "react-example-blog.appspot.com",
    messagingSenderId: "531283428180",
    appId: "1:531283428180:web:984d1c4fc746d779aabec1",
    // measurementId: "G-1Q7KRE26R6"
}

const firebase = window.firebase.initializeApp(config);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}> 
        <ContextProvider> 
            <Router> 
                <GlobalStyles /> 
                <App />
            </Router> 
        </ContextProvider>
    </FirebaseContext.Provider>, 
    document.getElementById('root')
)