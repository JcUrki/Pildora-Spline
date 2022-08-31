import React from 'react';
import './IntroStyle.css';
import Spline from '@splinetool/react-spline';

export default function Intro(){
    return(
        <section className='hintro-container'>
            <section className='intro-spline'>
            <Spline scene="https://prod.spline.design/7qNqOb5L8lmWd8Cw/scene.splinecode" />
            </section>
            <section className='hintro-section1'>
                <h1 className='hintro-title'>Spline: Creación e implementación de entornos 3D para aplicaciones Web </h1>
                <h2 className='hintro-subtitle'>¿Qué es?</h2>
                <p className='hintro-para'>Blablansaujdbasdnasdasnkdkasd</p>
            </section>
       </section>
    )
}