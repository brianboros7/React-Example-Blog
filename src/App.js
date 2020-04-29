import React, { Component } from 'react';
// import {  Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import MainSection from './pages/landing/MainSection'; 
// import Footer from './components/Footer';


function App() { 
  return( 
    <div> 
      <Header /> 
      <MainSection /> 
    </div> 
  )
}


export default App;