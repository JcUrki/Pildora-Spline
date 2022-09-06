import React, { useEffect, useState } from 'react';
import './MoreInfoStyle.css';
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom";

export default function MoreInfo(){
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() =>{ 
            setLoading(false);
        }, 5000);
    }, [])

    return(
        <section className="minfo">
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/2c1Bfz2DT7a0eHwd/scene.splinecode" />
                )
                :
                ( 
                    <section className='minfo-container'>
                            <h1>🧠Más información</h1>
                        <section className='minfo-urls'>
                            <div className='minfo-doc'>
                                <h2>📖Documentación</h2>
                                <ul>
                                        <li><Link to="https://docs.spline.design">Documentación Oficial de Spline</Link></li>
                                        <li><Link to="https://www.youtube.com/c/splinetool">Canal de Youtube Oficial de Spline</Link></li>
                                </ul>
                            </div>
                            <div className='minfo-doc'>
                                <h2>💻Ejemplos Web</h2>
                                <ul>
                                        <li><Link to="https://www.buildwithflow.io/">Build With Flow</Link></li>
                                        <li><Link to="https://meadow-wez.webflow.io/">Meadow</Link></li>
                                        <li><Link to="https://3dweb.pro/">3DWeb</Link></li>
                                        <li><Link to="https://www.thebosokacompany.com/">The Bosoka Company</Link></li>
                                </ul>
                            </div>
                        </section>  
                            <h3>✨ ¡Gracias por vuestra atención! ✨</h3>
                    </section>
                ) 
            }      
        </section>
    )
}