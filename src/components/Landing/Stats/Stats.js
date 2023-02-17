import './style.scss'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function Stats() {
    let NFTAnim = useRef(null);
    let saleAnim = useRef(null);
    let transactionAnim = useRef(null);

    useEffect(() => {

        const statsNFT = NFTAnim.current;
        gsap.fromTo( statsNFT, 
            {
                rotate: 0,
            },
            {
                rotate: 720,
                scrollTrigger: {
                    trigger: statsNFT,
                    toggleActions: "play reset play reset"
                },
                ease: "ease",
                duration: 2,
                delay: 1
            }
        )

        const statsSales = saleAnim.current;
        gsap.fromTo( statsSales, 
            {
                rotateY: 0,
            },
            {
                rotateY: 720,
                scrollTrigger: {
                    trigger: statsSales,
                    toggleActions: "play reset play reset"
                },
                ease: "ease",
                duration: 2,
                delay: 2
            }
        )

        const statsTransactions = transactionAnim.current;
        gsap.fromTo( statsTransactions, 
            {
                scale : 1,
            },
            {
                rotate: 360,
                scale : 1.4,
                scrollTrigger: {
                    trigger: statsTransactions,
                    toggleActions: "play reset play reset"
                },
                duration: 3,
                ease: "elastic",
                delay : 3
            }
        )

    }, []);

    return (
        <section className='stats'>
            <ul className='stats_list'>
                <li className='stats_list-item'>
                    <div className='number_wrapper'>
                        <p className='number_wrapper-text'>1000</p>
                        <span ref={NFTAnim} className='number_wrapper-shape'>¤</span>
                    </div>
                    <h4 className='stats_list-item-title'>Brushizers</h4>
                </li>
                <li className='stats_list-item'>
                    <div className='number_wrapper'>
                        <p className='number_wrapper-text'>80K</p>
                        <span ref={saleAnim} className='number_wrapper-shape'>$</span>
                    </div>
                    <h4 className='stats_list-item-title'>Sales</h4>
                </li>
                <li className='stats_list-item'>
                    <div className='number_wrapper'>
                        <p className='number_wrapper-text'>459</p>
                        <span ref={transactionAnim} className='number_wrapper-shape'>+</span>
                    </div>
                    <h4 className='stats_list-item-title'>Transactions</h4>
                </li>
            </ul>
        </section>
    );
}

export default Stats;