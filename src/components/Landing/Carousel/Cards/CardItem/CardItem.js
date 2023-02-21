import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss'

function CardItem({ price_sol, item, isDesktop }) {
    const price_usd = price_sol * 26.8; // Conversion rate on Feb 23
    return (
        isDesktop && isDesktop ? ( // Check if client is on desktop, change carousel Item depending
            // Ici le HTML pour la card desktop
            <div
                className={`carousel_container-item 
                carousel_container cardlast`}>
                <Link to={`/artwork/${item.id}`}>
                    <img src={item.image}
                        alt="Artwork from Brushizer collection"
                        className='card-artwork'
                    ></img>
                    <div className='card_infos'>
                        {/* Bloc des informations de la card */}
                        <div className='card_infos_upper'>
                            <span className='card_infos_upper-id'>Brushizer {item.name}</span>
                        </div>
                        <div className='card_infos_lower'>
                            <div className='card_infos_lower-prices'>
                                <p className='card_infos_lower-prices-text'>{item.description}</p>
                                <p className='card_infos_lower-prices-crypto'>
                                    <img src={`/assets/logos/solanaLogoMark.svg`}
                                        alt='Solana logo'
                                        className='solana-logo'
                                    />
                                    {price_sol}</p>
                                <p className='card_infos_lower-prices-currency'>$ {price_usd}</p>
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
            ) : (
            <div className={`carousel_container-item`}>
                <Link to={item.id}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/nft/${item.image}`}
                        alt="Artwork from Brushizer collection">
                    </img>
                </Link>
            </div>)
    );
}

CardItem.propTypes = {
    price_sol: PropTypes.number.isRequired,
    isDesktop: PropTypes.bool.isRequired,
};

export default CardItem;
