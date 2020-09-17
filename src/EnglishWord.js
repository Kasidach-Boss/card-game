import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.jpeg';
import WordCard from './WordCard';

function EnglishWord (){
    return (
      
        <div className="App" >
          
          
          <header className="App-header">
            <strong><h1>Card Game For 3SA03</h1></strong>
            <h2>Give you sort all character card to be word follow this photo.</h2>
            <img src={Hello}  className="page-content img" alt=""/>
           <WordCard value = "hello"/>
          </header>
          <div className="bgcolor">
                <b><p>Creater: Kasidach Sangthong 6135512045</p></b>
                <img src={logo} className="App-logo" alt="logo"  />
                <b><p>power by React</p></b>
            </div>
            
        </div>
      );
   }

export default EnglishWord;