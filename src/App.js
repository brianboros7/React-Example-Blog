import React from 'react';
import './pages/landing/style.css';
import MainSection from './pages/landing/MainSection';
import NetFlixMain from './pages/netflix-react-example/NetFlixMain'; 
import "tailwindcss/tailwind.css"
import MovieSearch from './pages/movie-search/MovieSearch'; 
import ToDoApp from './pages/todo-app/ToDoApp'; 
import TypingGame from './pages/speed-typing-game/TypingGame'; 


import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 
// import Footer from './components/app/Footer';

export default function App() {     
  return (   
      <Router>
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
            path="/movie-search">
            <MovieSearch />  
          </Route> 
          <Route 
            path="/todo-app">
            <ToDoApp />  
          </Route>
          <Route 
            path="/speed-typing-game">
            <TypingGame />  
          </Route>
        </Switch>
      </Router>
    )
  }