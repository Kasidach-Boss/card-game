import React from 'react';
import logo from './logo.svg';
import './App.css';
import Konichiwa from '*.gif';
import WordCard from './WordCard';

function JapaneseWord (){
    return (
      
        <div className="App" >
           
          <header className="App-header">
            <strong><h1>Card Game For 3SA03</h1></strong>
            <h2>Give you sort all character card to be word follow this photo.</h2>
            <img src={Konichiwa}  alt=""/>
          </header>
          <div className="bgcolor">
          
            <WordCard value = "konichiwa"/>
         
                <b><p>Creater: Kasidach Sangthong 6135512045</p></b>
                <img src={logo} className="App-logo" alt="logo"  />
                <b><p>power by React</p></b>
            </div>
            
        </div>
      );
   }

export default JapaneseWord;