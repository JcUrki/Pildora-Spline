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
                <h1 className='intro-title'><span>Spline: </span>Creación e implementación de entornos 3D para aplicaciones Web </h1>
                <h2 className='intro-subtitle'>🔎¿Qué es?</h2>
                <p className='intro-para'>Spline es una herramienta que se centra en el diseño de recursos 3D orientados para la web. El proyecto se encuentra en una etapa temprana de desarrollo pero tiene una buena comunidad detrás que ofrece muchísimos recursos al alcance de todos.
                <br/><br/>Es apta tanto para personas con conocimientos previos de modelado 3D como personas que se quieren iniciar a él, ya que tiene una interfaz sencilla pero con multitud de opciones para personalizar nuestros proyectos.</p>
            </section>
       </section>
    )
}