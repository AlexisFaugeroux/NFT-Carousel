import './style.scss'
import { NavLink } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function HeroInfo() {
    let textAnim = useRef(null)
    let buttonAnim = useRef(null)

    useEffect(() => {

        const elem = textAnim.current;
        gsap.fromTo( elem, 
            {
                x : -200,
                opacity : 0,
            },
            {
                x : 0,
                scrollTrigger: {
                    trigger: elem,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 1.5,
                ease: "back.out(3)",
                delay : 0.6
            }
        )

        const btnHeroText = buttonAnim.current;
        gsap.fromTo( btnHeroText, 
            {
                y : 200,
                opacity : 0,
            },
            {
                y : 0,
                scrollTrigger: {
                    trigger: btnHeroText,
                    toggleActions: "play reset play reset"
                },
                opacity : 1,
                duration: 3,
                ease: "elastic",
                delay : 1.1
            }
        )
    }, []);
    
    return (
        <div className='hero_info'>
            <div ref={textAnim} className='hero_info-title'>
                <h1>Mint now your <strong>Brushizer</strong> & <span> join the community </span>
                </h1>
            </div>
            <div ref={buttonAnim} className='hero_info_buttons'>
                <NavLink to='/signup'><button className='hero_info_buttons-mint'>MINT NOW</button></NavLink>
                <NavLink to='/collection'><button className='hero_info_buttons-show'>SHOW COLLECTION</button></NavLink>
            </div>
        </div>
    );
}

export default HeroInfo;
