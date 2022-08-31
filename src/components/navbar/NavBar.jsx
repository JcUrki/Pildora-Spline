import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Thoughtworks_logo.png'
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
                    <img src={Logo} alt='' className='logo'/>
                </section>
            </Link> 
        </header>
    )
}