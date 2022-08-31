import React from 'react';
import Graphic from '../assets/images/graphic.png'

export default function InfoGraphics(){
    return(
        <section className='igraphic-container'>
            <section className='igraphic-maplegend'>
                <section className='legend-block'>
                    <section className='legend1'/>
                    <p>Lorem</p>
                </section>
                <section className='legend-block'>
                    <section className='legend2'/>
                    <p>Ipsum</p>
                </section>
            </section>

            <img src={Graphic} alt='' className='info'/>  
        </section>
    )
}