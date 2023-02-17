import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss'

function SaleCarouselItem({ item, isDesktop }) {
    return (
        isDesktop && isDesktop ? // Check if client is on desktop, change carousel Item depending
            // Ici le HTML pour la card desktop
            <div
                className={`last_carousel_container-item 
                last_carousel_container cardlast`}>
                <Link to={`/artwork/${item.id}`}>
                    <img src={`/assets/nft/${item.image}`}
                        alt="Artwork from Brushizer collection"
                        className='card-artwork'
                    ></img>
                    <div className='card_infos'>
                        {/* Bloc des informations de la card */}
                        <div className='card_infos_upper'>
                            <span className='card_infos_upper-id'>{item.name}</span>
                        </div>
                        <div className='card_infos_lower'>
                            <div className='card_infos_lower-prices'>
                                <p className='card_infos_lower-prices-text'>Last sale</p>
                                <p className='card_infos_lower-prices-crypto'>
                                    <img src={`/assets/logos/solanaLogoMark.svg`}
                                        alt='Solana logo'
                                        className='solana-logo'
                                    />
                                    {item.price_sol}</p>
                                <p className='card_infos_lower-prices-currency'>$ {item.price_usd}</p>
                            </div>
                            <div className='card_infos_lower-market'>
                                <p className='card_infos_lower-market-text'>
                                    Buy on
                                </p>
                                <button className='card_infos_lower-market-btn'>
                                    @Opensea
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div >
            :
            <div className={`last_carousel_container-item`}>
                <Link to={`/artwork/${item.id}`}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/nft/${item.image}`}
                        alt="Artwork from Brushizer collection">
                    </img>
                </Link>
            </div>
    );
}

SaleCarouselItem.propTypes = {
    itemPos: PropTypes.string,
    isDesktop: PropTypes.bool.isRequired,
};

export default SaleCarouselItem;
