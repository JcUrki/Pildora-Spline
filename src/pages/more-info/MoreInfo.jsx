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
        <section>
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/oGxQ2hfwKjbU0l86/scene.splinecode" />
                )
                :
                (
                    <section className='minfo-container'>
                    <section className='minfo-urls'>
                        <ul>
                            <li>Documentation</li>
                                <Link to="https://docs.spline.design">Doc</Link>
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
        </section>
    )
}