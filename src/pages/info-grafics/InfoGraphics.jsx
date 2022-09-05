import React, { useEffect, useState } from 'react';
import './InfoGraficsStyle.css'
import Spline from '@splinetool/react-spline';
import graphicImg from '../../assets/images/graphic.png';

export default function InfoGraphics(){
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() =>{ 
            setLoading(false);
        }, 5000);
    }, [])

    return(
        <section className='igraphic-container'>
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/oGxQ2hfwKjbU0l86/scene.splinecode" />
                )
                :
                (
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

                        <img src={graphicImg} alt='graphics'/>  
                    </section>
                )
            }
        </section>
    )
}