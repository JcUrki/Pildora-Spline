import React from 'react';
import './IntroStyle.css';
import Spline from '@splinetool/react-spline';

export default function Intro(){
    return(
        <section className='intro-container'>
            <section className='intro-spline'>
                <Spline scene="https://prod.spline.design/7qNqOb5L8lmWd8Cw/scene.splinecode" />
            </section>

            <section className='intro-section1'>
                <h1 className='intro-title'>Spline: Creación e implementación de entornos 3D para aplicaciones Web </h1>
                <h2 className='intro-subtitle'>¿Qué es?</h2>
                <p className='intro-para'>Blablansaujdbasdnasdasnkdkasd</p>
            </section>
       </section>
    )
}