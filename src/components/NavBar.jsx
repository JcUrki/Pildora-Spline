import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <header>
            <section className='navbar-first-block'>
                <Link to='/HeroImage'  className='link'>Hero Image</Link>
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