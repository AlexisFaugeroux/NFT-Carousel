import './style.scss';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Convert() {
    let convertor = useRef(null)

    useEffect(() => {
        const elem = convertor.current;
        gsap.fromTo( elem, 
            {
                opacity : 0,
                scale: 0.6,
            },
            {
                scrollTrigger: {
                    trigger: elem,
                    toggleActions: "play complete"
                },
                opacity : 1,
                scale: 1,
                ease: "elastic",
            }
        )
    }, [])

    return (
        <>
            <section id='convertHash' className="convert">

            <div ref={convertor} className="convert_decrypt">
                    <div className="convert_decrypt--title">Convertor</div>
                    <div className="convert_decrypt--subtitle">Find the sentence behind each Brushizer</div>
                    
                    <NavLink to='/convertor'>
                    <button className="convert_btn">
                    <Icon name='angle double right' size='large' className='convert_btn--i_left'/>
                        Decrypt here
                    </button>
                    </NavLink>
                </div>
                
                <div className="convert_ads">
                    
                </div>

                
            </section>
        </>

    );
}

export default Convert;
