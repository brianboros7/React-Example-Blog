import React from 'react';
import './pages/landing/style.css';
import "tailwindcss/tailwind.css"
import Header from './components/app/Header'

import MainSection from './pages/landing/MainSection';
import NetFlixMain from './pages/netflix-react-example/NetFlixMain'; 
import EcommercePhotosApp from './pages/ecommerce-capstone/EcommercePhotosApp'; 

import MovieSearch from './pages/movie-search/MovieSearch'; 
import ToDoApp from './pages/todo-app/ToDoApp'; 
import TypingGame from './pages/speed-typing-game/TypingGame'; 


import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

export default function App() {     
  return (  
    <Router> 
      <Header />
      <Switch> 
        <Route
          path="/" exact > 
          <MainSection /> 
        </Route> 
        <Route 
          path="/netflix-react-example" > 
            <NetFlixMain/> 
        </Route> 

        <Route
          path="ecommerce-capstone">
            <EcommercePhotosApp /> 
        </Route>

        <Route 
          path="/todo-app">
            <ToDoApp />  
        </Route>

        <Route 
          path="/movie-search">
            <MovieSearch />  
        </Route> 
        
        <Route 
          path="/speed-typing-game">
            <TypingGame />  
        </Route>
      </Switch>
    </Router>
  )
}