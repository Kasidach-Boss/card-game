import React from 'react';
import './App.css';
import CoE from './CoE.jpg';
import {Link} from 'react-router-dom';
function Nav(){
   
    return(
        <nav>
            <img src={CoE}  className='pictab' alt=""/>
            <ul className="nav-links">
                <Link to='/Home'>
                    <li >Home</li>
                </Link>
            </ul>
            <ul className="nav-links">
                <Link to='/about'>
                    <li>About</li>
                </Link>
                
            </ul>
        </nav>
    );
}
export default Nav;