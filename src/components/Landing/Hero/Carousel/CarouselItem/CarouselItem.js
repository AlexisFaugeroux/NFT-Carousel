import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './style.scss'

function CarouselItem({ item, itemPos, isDesktop }) {
    return (
        isDesktop && isDesktop ? // Check if client is on desktop, change carousel Item depending
            // Ici le HTML pour la card desktop
            <div
                className={`hero_carousel_container-item 
            hero_carousel_container-${itemPos} ${itemPos} card`}>
                <Link className='link-a' to={`/artwork/${item.id}`}>
                    <img src={`/assets/artworks/${item.image}`}
                        alt="Artwork from Brushizer collection"
                        className='card-artwork'
                    ></img>
                    <div className='card_infos'>
                        {/* Bloc des informations de la card */}
                        <div className='card_infos_upper'>
                            <span className='card_infos_upper-id'>{item.name} <Icon name='check circle' size='small' color='blue'></Icon></span>
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
            <div className={`hero_carousel_container-item ${itemPos}`}>
                <Link to={`/artwork/${item.id}`}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/artworks/${item.image}`}
                        alt="Artwork from Brushizer collection">
                    </img>
                </Link>
            </div>
    );
}

CarouselItem.propTypes = {
    // item: PropTypes.objectOf(PropTypes.shape({
    //     // id: PropTypes.number.isRequired,
    //     name: PropTypes.string.isRequired,
    //     image: PropTypes.string.isRequired,
    //     description: PropTypes.string,
    //     artist_name: PropTypes.string.isRequired,
    //     price_usd: PropTypes.string.isRequired,
    //     price_sol: PropTypes.string.isRequired,
    // })).isRequired,
    itemPos: PropTypes.string,
    isDesktop: PropTypes.bool.isRequired,
};

CarouselItem.defaultProps = {
    itemPos: null,
}

export default CarouselItem;
