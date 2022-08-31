import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

export default function NavBar(){
    return(
        <header>
            <section className='navbar-first-block'>
                <Link to='/InfoGraphics'  className='link'>Info Grafics</Link>
                <Link to='/Interactive'  className='link'>Interactive</Link>
                <Link to='/MoreInfo'  className='link'>More Info</Link>
            </section>  
            
            <Link to='/' className='link'>
                <section>
                    <p>/ThoughtWork</p>  
                </section>
            </Link> 
        </header>
    )
}