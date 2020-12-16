import { createContext } from 'react';
import firebase from 'firebase'; 


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXXZP4ogVJ0B3W3RhvqfqxtC8saaqBSYA",
    authDomain: "react-example-blog.firebaseapp.com",
    databaseURL: "https://react-example-blog.firebaseio.com",
    projectId: "react-example-blog",
    storageBucket: "react-example-blog.appspot.com",
    messagingSenderId: "531283428180",
    appId: "1:531283428180:web:984d1c4fc746d779aabec1",
    measurementId: "G-1Q7KRE26R6"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const FirebaseContext = createContext(null);
