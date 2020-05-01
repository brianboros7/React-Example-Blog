import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './pages/About'; 
import BlogPage from './pages/Blog'; 
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'; 
// import Footer from './components/Footer';

export default function App() { 
    return ( 
      <div> 
        <div> 
          <Header /> 
        </div> 
        <div>
          <Router>
            <Switch> 
              <Route path='/'></Route>
              <Route path="/blog" component={BlogPage}></Route>
              <Route path="/about" component={About}></Route>
            </Switch>
          </Router>
        </div> 
      </div> 
    )
  }