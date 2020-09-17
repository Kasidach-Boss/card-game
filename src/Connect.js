import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import './App.css';
function Connect() {
 
    return (
        <div className="App" >
          <Router>
            <Nav/>
            <Switch>
            <Route path = "/about" component={About}></Route>
            </Switch>
          </Router>
        </div>
    );
}

export default Connect;