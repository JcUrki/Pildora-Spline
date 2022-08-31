import React from 'react';
import './MoreInfoStyle.css';
import Spline from '@splinetool/react-spline';

export default function MoreInfo(){
    return(
        <section className='minfo-container'>
            <section className='minfo-urls'>
                <ul>
                    <li>Documentation</li>
                    <li>Examples</li>
                </ul>
                <h3>¡Gracias por vuestra atención!</h3>
            </section>  
            <section className='minfo-spline'>
            <Spline scene="https://prod.spline.design/2c1Bfz2DT7a0eHwd/scene.splinecode" />
            </section>
        </section>
    )
}