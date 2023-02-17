import './style.scss';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function About() {
    let uniqueAnim = useRef(null);
    let shopAnim = useRef(null);
    let socialAnim = useRef(null);
    let charityAnim = useRef(null);
    let imageAnim = useRef(null);
    

    useEffect(() => {

        const cardUnique = uniqueAnim.current;
        gsap.fromTo( cardUnique, 
            {
                x : -200,
                opacity : 0,
            },
            {
                x : 0,
                scrollTrigger: {
                    trigger: cardUnique,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 1,
                ease: "ease",
                delay : 0.6
            }
        )

        const cardShop = shopAnim.current;
        gsap.fromTo( cardShop, 
            {
                scale : 0,
                opacity : 0,
            },
            {
                scale : 1,
                scrollTrigger: {
                    trigger: cardShop,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 2.5,
                ease: "bounce",
                delay : 1
            }
        )

        const cardSocial = socialAnim.current;
        gsap.fromTo( cardSocial, 
            {
                y : 200,
                scale : 0,
                opacity : 0,
            },
            {   
                y : 0,
                scale : 1,
                scrollTrigger: {
                    trigger: cardSocial,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 1.5,
                ease: "back.out(1.7)",
            }
        )

        const cardCharity = charityAnim.current;
        gsap.fromTo( cardCharity, 
            {
                x : 100,
                opacity : 0,
            },
            {   
                x : 0,
                scrollTrigger: {
                    trigger: cardCharity,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 1,
                ease: "ease",
                delay : 0.75
            }
        )

        const imagesMove = imageAnim.current;
        gsap.fromTo( imagesMove, 
            {
                x : 5000,
                opacity : 0,
            },
            {   
                x : 0,
                scrollTrigger: {
                    trigger: imagesMove,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 2.25,
                ease: "ease",
            }
        )
        
    }, []);

    return (
        <>
            <section className="about">
                <div className="about_title">
                    <h2><span>About</span> the project</h2>
                </div>
                <div className="about_container">
                    <div className="about_container_wrapper">
                        <div className="about_container_wrapper_cards">

                            <div ref={uniqueAnim} className="about_container_wrapper_cards_item">
                                <NavLink to='/collection'>
                                <div  className="about_container_wrapper_cards_item_unique">
                                    <p>Chaque Brushizer a été crée sans Candy Machine. Mezange a généré chaque NFT à la main sans utiliser de script. Les couleurs des backgrounds sont uniques à chaque NFT ce qui ajoute de la rareté à celui qui le detiens.</p>
                                    <div className="about_container_wrapper_cards_item_unique_content">
                                        <h2>UNIQUE NFT</h2>
                                        <button className="about_container_wrapper_cards_item_unique_content--btn"> Buy Now</button>
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                            
                            <div ref={shopAnim} className="about_container_wrapper_cards_item">
                            <Link to={'/#roadmap'} >
                                <div className="about_container_wrapper_cards_item_shop">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores sit, error
                                doloremque laboriosam cumque obcaecati commodi aspernatur ut fugiat dolorem odit
                                molestias eveniet quo! Minus reprehenderit ab necessitatibus dignissimos ex dolor?</p>
                                    <div className="about_container_wrapper_cards_item_shop_content">
                                        <h2>SHOP</h2>
                                        <button className="about_container_wrapper_cards_item_shop_content--btn">Soon 2024</button>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                            <div  ref={socialAnim} className="about_container_wrapper_cards_item">
                            <Link to={'/roadmap'} >
                                <div className="about_container_wrapper_cards_item_social">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores sit, error
                                doloremque laboriosam cumque obcaecati commodi aspernatur ut fugiat dolorem odit
                                molestias eveniet quo! Minus reprehenderit ab necessitatibus dignissimos ex dolor?</p>
                                    <div className="about_container_wrapper_cards_item_social_content">
                                        <h2>SOCIAL</h2>
                                        <button className="about_container_wrapper_cards_item_social_content--btn">2024 - 2025</button>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <div ref={charityAnim} className="about_container_wrapper_cards_item">
                                <NavLink to='/charity'>
                                <div className="about_container_wrapper_cards_item_charity">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores sit, error
                                doloremque laboriosam cumque obcaecati commodi aspernatur ut fugiat dolorem odit
                                molestias eveniet quo! Minus reprehenderit ab necessitatibus dignissimos ex dolor?</p>
                                    <div className="about_container_wrapper_cards_item_charity_content">
                                        <h2>CHARITY</h2>
                                        <a href="/"><button className="about_container_wrapper_cards_item_charity_content--btn">Read more</button></a>
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div ref={imageAnim} className="about_container_image">
                    </div>
                </div>
            </section>
        </>

    );
}

export default About;
