import React from 'react';
import { Component } from 'react'; 
import { useState, useEffect } from 'react'; 
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() { 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result =  await fetch("https://orangevalleycaa.org/api/videos").then(

      response => response.json()
      );
      setData(result); 
    };
    fetchData();
  }, []); 
  return (
    <div className="App ">
      <Header /> 
      <div className="blog-main h-40 bg-blue-600"> 
      {data.map(video => (
        <div>
          <h2> {video.name} </h2>
          <video height={100} controls src={video.video_url} /> 
        </div> 
      ))}
      </div>

      <Footer /> 
    </div>
  );
}


export default App;