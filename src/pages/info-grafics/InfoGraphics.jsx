import React from 'react';
import './InfoGraficsStyle.css'

export default function InfoGraphics(){
    return(
        <section className='igraphic-container'>
          
            <section className='igraphic-maplegend'>
                <ul>
                    <li className='igraphic-maplegend-item'>
                        <section className='legend-block'>
                            <section className='legend1'/>
                            <p>Lorem</p>
                        </section>
                    </li>  
                    <li className='igraphic-maplegend-item'>
                        <section className='legend-block'>
                            <section className='legend2'/>
                            <p>Ipsum</p>
                        </section>
                    </li>
                    <li className='igraphic-maplegend-item'>
                        <section className='legend-block'>
                            <section className='legend3'/>
                            <p>Dolor</p>
                        </section>
                    </li>
                    <li className='igraphic-maplegend-item'>
                        <section className='legend-block'>
                            <section className='legend4'/>
                            <p>Sit</p>
                        </section>
                    </li>
                </ul>
            </section>

            <img href=''/>  
        </section>
    )
}