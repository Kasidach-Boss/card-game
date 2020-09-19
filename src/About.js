import React from 'react';
import Boss from './Boss.jpg';
import WordCard from './WordCard';
import logo from './logo.svg';
import './App.css' ;
function About(){
    return(
        <div className="App">
            <header className="App-header">
                <h1>About us</h1>
            <img alt="Boss" className="photo" src={Boss} />
                <p>My name is Kasidach Sangthong.</p>
                <p>What is his student id?</p> 
                <WordCard value ="6135512045"/> 
            <p>My Github</p>
            <tr>
                    
                    <td><a href={"https://github.com/Kasidach-Boss/LabAdvanced1-3SA03"}> คลิกที่นี่ เพื่อไปที่checkpointในห้องแลป</a></td>
            </tr>
            <tr>
                   
                    <td><a href={"https://github.com/Kasidach-Boss/card-game"}> คลิกที่นี่ เพื่อไปที่งานหลังการทดลองของผม</a></td>
            </tr>
                
                               
            </header>
            <div className="bgcolor">
                <img src={logo} className="App-logo" alt="logo"  />
                <b><p>power by React</p></b>   
            </div>
            
        </div>
           

        
    );
}
export default About;