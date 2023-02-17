import './style.scss';
import CarouselItem from './CarouselItem/CarouselItem';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

/* Components/style */

function Carousel({ items, isLoading }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    // useRef hook to create references to the next and previous buttons
    const nextButtonRef = useRef();
    const prevButtonRef = useRef();

    useEffect(() => {

        // logic for navigating to the next item
        function goToNext() {
            // if the current active item is the last item, go back to the first item
            if (activeIndex === items.length - 1) {
                setActiveIndex(0);
            } else {
                // otherwise, go to the next item
                setActiveIndex(activeIndex + 1);
            }
        }

        // logic for navigating to the previous item
        function goToPrev() {
            // if the current active item is the first item, go to the last item
            if (activeIndex === 0) {
                setActiveIndex(items.length - 1);
            } else {
                // otherwise, go to the previous item
                setActiveIndex(activeIndex - 1);
            }
        }

        const nextButton = nextButtonRef.current;
        const prevButton = prevButtonRef.current;
        // add event listeners for the next and previous buttons using the references
        nextButtonRef.current.addEventListener('click', goToNext);
        prevButtonRef.current.addEventListener('click', goToPrev);

        // clean up event listeners when the component unmounts
        return () => {
            nextButton.removeEventListener('click', goToNext);
            prevButton.removeEventListener('click', goToPrev);
        }
    }, [activeIndex, items.length]);

    // get the current active item and the previous and next items
    const activeItem = items[activeIndex];
    const prevItem = items[activeIndex - 1] || items[items.length - 1];
    const nextItem = items[activeIndex + 1] || items[0];


    return (
        <div className='hero_carousel'>
            <div className='hero_carousel_container'>
                {!isLoading && <>
                    <CarouselItem itemPos="prev-item" item={prevItem} isDesktop={isDesktop} />
                    <CarouselItem itemPos="active-item" item={activeItem} isDesktop={isDesktop} />
                    <CarouselItem itemPos="next-item" item={nextItem} isDesktop={isDesktop} />
                </>}
                {/* If artworks are still loading, display spinning loader */}
                {isLoading && <div className="loader-wrapper">
                    <img src='/assets/loader.svg' alt='Loader spinning'></img>
                </div>}
            </div>
            <div className='hero_carousel-buttons'>
                <button ref={prevButtonRef} className='hero_carousel-buttons-prev'>
                    <Icon name='chevron left' size='large' className='chevron-left'></Icon>
                </button>
                <button ref={nextButtonRef} className='hero_carousel-buttons-next'>
                    <Icon name='chevron right' size='large' className='chevron-right'></Icon>
                </button>
            </div>
        </div>
    );
}
Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Carousel;
