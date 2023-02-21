import { A11y, Autoplay, Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './style.scss';

import CardItem from './CardItem/CardItem';

import { useEffect, useRef } from 'react';
import { Icon } from 'semantic-ui-react';

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Cards = ({ price_sol, items, isDesktop, isLoading }) => {
    let lastSaleAnim = useRef(null);

    useEffect(() => {

        const lastReveal = lastSaleAnim.current;
        gsap.fromTo( lastReveal, 
            {
                scale : 0,
                opacity : 0,
            },
            {
                scale : 1,
                scrollTrigger: {
                    trigger: lastReveal,
                    toggleActions: "play complete"
                },
                opacity : 1,
                duration: 2.5,
                ease: "bounce",
                delay : 0.5
            }
        )
    }, []);

    return (
        <div ref={lastSaleAnim} className="carousel_wrapper">
            <div className='carousel_wrapper-buttons-container'>
                <button className='carousel_wrapper-buttons-prev btn-left'><Icon size='large' name="chevron left" /></button>
                <button className='carousel_wrapper-buttons-next btn-right'><Icon size='large' name="chevron right" /></button>
            </div>
            <Swiper
                modules={[A11y, Autoplay, Navigation, Mousewheel]}
                navigation={{
                    prevEl: '.btn-left',
                    nextEl: '.btn-right',
                }}
                keyboardControl= {true}
                grabCursor={true}
                mousewheel= {true}
                breakpoints={{
                    1700: {
                        slidesPerView: 5,
                        spaceBetween: -5
                    },
                    1400: {
                        slidesPerView: 4,
                        
                        spaceBetween: -5
                    },
                    1200: {
                        slidesPerView: 3,
                        
                        spaceBetween: -5
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                  }}
                loop={true}
                className='carousel_wrapper-content'
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} className='swiper'>
                        <CardItem price_sol={price_sol} item={item} isDesktop={isDesktop} isLoading={isLoading} className='card' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
}

export default Cards;

