import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.jpeg';
import WordCard from './WordCard';


function App() {
 
  return (
      
      <div className="App" >
        <header className="App-header">
          <h1>Give you sort all character card to be word follow this photo.</h1>
          <img src={Hello}  className="page-content img" alt=""/>
          <WordCard value = "hello"/>
          </header>
        
          <img src={logo} className="App-logo" alt="logo"  />
          
        
      </div>
    );
 }

export default App;

