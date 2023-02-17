import { A11y, Autoplay, Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './style.scss';

import SaleCarouselItem from '../../../Landing/LastSale/SaleCarousel/SaleCarouselItem/SaleCarouselItem';

import { useEffect, useRef } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const SaleCarousel = ({ items, isAvailable, isDesktop }) => {
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
        <div ref={lastSaleAnim} className={`carousel_wrapper ${isAvailable ? 'available' : 'not-available'}`}>
            {/* <button className='hero_carousel-buttons-prev btn-left'><Icon size='large' name="chevron left" /></button> */}
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
                        <SaleCarouselItem item={item} isDesktop={isDesktop} className='card-sale' />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <button className='hero_carousel-buttons-next btn-right'><Icon size='large' name="chevron right" /></button> */}
        </div >
    );
}

export default SaleCarousel;

