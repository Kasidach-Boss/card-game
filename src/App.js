import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import EnglishWord from './EnglishWord';
function App() {
  const Home = () =>(
   
    <div className="App" >
       
        <header className="App-header">
          <strong><h1>Card Game For 3SA03</h1></strong>
          <h2>Give you sort all character card to be word follow this photo.</h2>
          <b><p>Creater: Kasidach Sangthong 6135512045</p></b>
          <img src={logo} className="App-logo" alt="logo"  />
          <b><p>power by React</p></b>
        </header>
        
    </div>
  );
 
  return (
    <div className="App" >
    <Router>
      <Nav/>
      <Switch>
          <Route path = "/" exact component ={Home}></Route>
          <Route path = "/EnglishWord" component = {EnglishWord}></Route>
          <Route path = "/about" component={About}></Route>
      </Switch>
    </Router>
  </div>
      
         
  );
}
export default App;
