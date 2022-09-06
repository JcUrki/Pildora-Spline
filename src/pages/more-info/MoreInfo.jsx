import React, { useEffect, useState } from 'react';
import './MoreInfoStyle.css';
import Spline from '@splinetool/react-spline';

export default function MoreInfo(){
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() =>{ 
            setLoading(false);
        }, 5000);
    }, [])

    return(
        <section>
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/oGxQ2hfwKjbU0l86/scene.splinecode" />
                )
                :
                (
                    <section className='minfo-container'>
                        <h1>🧠Más información</h1>
                    <section className='minfo-urls'>
                        <div className='minfo-doc'>
                            <h2>📖Documentación</h2>
                        <ul>
                                <li><a href="https://docs.spline.design">Documentación Oficial de Spline</a></li>
                                <li><a href="https://www.youtube.com/c/splinetool">Canal de Youtube Oficial de Spline</a></li>
                                <li><a href="https://discord.com/invite/M9hNDMqvnw">Comunidad Discord Oficial de Spline</a></li>
                        </ul></div>
                        <div className='minfo-doc'>
                        <h2>💻Ejemplos Web</h2>
                        <ul>
                                <li><a href="https://www.buildwithflow.io/">Build With Flow</a></li>
                                <li><a href="https://meadow-wez.webflow.io/">Meadow</a></li>
                                <li><a href="https://3dweb.pro/">3DWeb</a></li>
                                <li><a href="https://www.thebosokacompany.com/">The Bosoka Company</a></li>
                        </ul></div>
                    </section>  
                        <h3>✨ ¡Gracias por vuestra atención! ✨</h3>
                    <section className='minfo-spline'>
                    <Spline scene="https://prod.spline.design/2c1Bfz2DT7a0eHwd/scene.splinecode" />
                    </section>
                </section>
                 )
            } 
        </section>
    )
}