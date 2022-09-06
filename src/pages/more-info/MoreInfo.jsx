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
        <section className="minfo">
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/2c1Bfz2DT7a0eHwd/scene.splinecode" />
                )
                :
                (
                    <section className="minfo-general">
                        <section className="minfo-container1">
                            <div className="minfo-vd">
                            <h2>👍Ventajas</h2>
                            <ul>
                                <li>▶ Interfaz intuitiva</li>
                                <li>▶ Puedes trabajar desde cualquier ordenador</li>
                                <li>▶ Versión Online y Desktop</li>
                                <li>▶ Ámplia comunidad</li>
                                <li>▶ Muchisimas funcionalidades gratis</li>
                                <li>▶ Puedes trabajar en equipo</li>
                                <li>▶ Apto para todos los usuarios</li>
                            </ul>
                            </div>
                            <div className="minfo-vd">
                            <h2>👎Desventajas</h2>
                            <ul>
                                <li>▶ Compatibilidad con navegadores antiguos</li>
                                <li>▶ Archivos muy complejos afectan a la performance</li>
                                <li>▶ Limitaciones en funciones de 3D</li>
                                <li>▶ No hay mucho más, es chulísimo ¯\_(ツ)_/¯</li>
                            </ul>
                            </div>
                            </section>
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
                </section>
                </section>
                 )
            }   
        </section>
    )
}