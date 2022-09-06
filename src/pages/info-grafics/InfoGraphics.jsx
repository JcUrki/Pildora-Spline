import React, { useEffect, useState } from 'react';
import './InfoGraficsStyle.css'
import Spline from '@splinetool/react-spline';

export default function InfoGraphics(){
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() =>{ 
            setLoading(false);
        }, 5000);
    }, [])

    return(
        <section className='igraphic-section' style={{height: "100vh"}}>
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/2c1Bfz2DT7a0eHwd/scene.splinecode" />
                )
                :
                (
                    <section className='igraphic-container'>
                        <section className='igraphic-maplegend'>
                            <h2>🧐¿Qué aporta Spline? </h2>
                            <br/>
                            <ul>
                                <li className='igraphic-maplegend-item'>
                                    <section className='legend-block'>
                                        <section className='legend1'/>
                                        <p>Creatividad</p>
                                    </section>
                                </li>  
                                <li className='igraphic-maplegend-item'>
                                    <section className='legend-block'>
                                        <section className='legend2'/>
                                        <p>Dinamismo</p>
                                    </section>
                                </li>
                                <li className='igraphic-maplegend-item'>
                                    <section className='legend-block'>
                                        <section className='legend3'/>
                                        <p>Interactividad</p>
                                    </section>
                                </li>
                                <li className='igraphic-maplegend-item'>
                                    <section className='legend-block'>
                                        <section className='legend4'/>
                                        <p>Mejora la Experiencia de Usuario</p>
                                    </section>
                                </li>
                            </ul>
                        </section>
                        <div className="spline">
                        <Spline scene="https://prod.spline.design/GbqGhFXHSpkv1hUo/scene.splinecode" />
                        </div>
                    </section>
                 )
            } 
        </section>
    )
}