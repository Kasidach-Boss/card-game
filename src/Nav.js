import React from 'react';
import './App.css';
import CoE from './CoE.jpg';
import {Link} from 'react-router-dom';
function Nav(){
   
    return(
        <nav>
            <img src={CoE}  className='pictab' alt=""/>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
            </ul>
            <ul>
                <Link to='/EnglishWord'>
                    <li>EnglishWord</li>
                </Link>
            </ul>
            <ul>
                <Link to='/JapaneseWord'>
                    <li>JapaneseWord</li>
                </Link>
            </ul>
            <ul>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                
            </ul>
        </nav>
    );
}
export default Nav;