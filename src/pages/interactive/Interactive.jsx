import React, { useState, useEffect }from 'react';
import Spline from '@splinetool/react-spline';
import './InteractiveStyle.css'

export default function Interactive(){
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() =>{ 
            setLoading(false);
        }, 5000);
    }, [])

    return(
        <section className='hinteractive-section'>
            {loading ? 
                (
                    <Spline scene="https://prod.spline.design/oGxQ2hfwKjbU0l86/scene.splinecode" />
                )
                :
                (
                    <section>
                        <section className='hinteractive-section'>
                            <Spline scene="https://prod.spline.design/RX8gBXsW5e6igDPm/scene.splinecode" />
                            <h1 className='hinteractive-instructions'>Use the keys: the "W" (Top), "A" (Left), "S" (Botton),  D" (Right) to move around, the"Spacebar" to jump and the "Arrows" to change the viewing angle</h1>       
                        </section>  
                    </section>
                )
   
            }
        </section>
    )
}