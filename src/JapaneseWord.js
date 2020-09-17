import React from 'react';
import logo from './logo.svg';
import './App.css';
import Konnichiwa from './Konnichiwa.gif';
import WordCard from './WordCard';

function JapaneseWord (){
    return (
       <div className="App" >
         <header className="App-header">
            <strong><h1>Card Game For 3SA03</h1></strong>
            <h2>Give you sort all character card to be Japanese romanji word follow this photo.</h2>
            <img src={Konnichiwa}  alt=""/>
            <WordCard value = "konnichiwa"/>
            <div className="bgcolor">
                <b><p>Creater: Kasidach Sangthong 6135512045</p></b>
                <img src={logo} className="App-logo" alt="logo"  />
                <b><p>power by React</p></b>
            </div>
          </header>
          
            
        </div>
      );
   }

export default JapaneseWord;