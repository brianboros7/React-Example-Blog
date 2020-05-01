import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './pages/About'; 
import BlogPage from './pages/Blog'; 
import { BrowserRouter, Switch, Route, } from 'react-router-dom'; 
// import Footer from './components/Footer';

export default function App(props) { 
    return ( 
      <div> 
        <div> 
          <Header /> 
        </div> 
        <BrowserRouter>
          <div>
            <Switch> 
      
              <Route path="/blog" exact component={BlogPage}></Route>
              <Route path="/about" component={About}> </Route>
            </Switch>
          </div>
        </BrowserRouter> 
      </div> 
    )
  }