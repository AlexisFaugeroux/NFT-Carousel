import './style.scss'
import {
    Fragment,
    useState
} from 'react';
import SaleCarousel from './SaleCarousel/SaleCarousel';
import Filter from './Filter/Filter';
import artworks from '../../../data/artworks.json';
import mediaQuery from './MediaQuery/MediaQuery';

function LastSale() {
    const [filteredArtworks, setFilteredArtworks] = useState([...artworks]);
    const [isAvailableArtworks, setIsAvailableArtworks] = useState(true);

    const setArtworks = (Artworks) => {
        setFilteredArtworks(Artworks);
    };

    const setAvailable = (isAvailable) => {
        setIsAvailableArtworks(isAvailable);
    };

    return (
        <Fragment >
 
        <section className='last'> {
            /* Filter - Artworks */} 
            <Filter onSetArtworks={
                        setArtworks
                    }
                    onSetAvailable={
                        setAvailable
                    }
            /> {
            /* Available for this Date */} {
                    <SaleCarousel
                        items={
                            filteredArtworks
                        }
                        isAvailable={
                            isAvailableArtworks
                        }
                        isDesktop={
                            mediaQuery('(min-width: 1200px)')
                        }
                    />
                } {
            /* Not Available for this Date */} {
                    !isAvailableArtworks &&
                    <div className='ui grid container last_not-available'>
                        <p className='eight wide'> Aucun Artworks Vendues pour cette Période </p> 
                    </div>
        }
        </section>
        <div className="wave-bottom" >
            <img src="/assets/wave-small-bottom.svg" alt="Wave" />
        </div>
        </Fragment>
                            );
}

export default LastSale;