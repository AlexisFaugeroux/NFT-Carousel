import './style.scss'
import {
    Fragment,
    useEffect,
    useState
} from 'react';
import SaleCarousel from './SaleCarousel/SaleCarousel';
import Filter from './Filter/Filter';
// import artworks from '../../../data/artworks.json';
import mediaQuery from './MediaQuery/MediaQuery';
import axios from 'axios';

function LastSale() {
    const [price_sol, setPrice] = useState(0);
    const [filteredArtworks, setFilteredArtworks] = useState([]);
    const [isAvailableArtworks, setIsAvailableArtworks] = useState(true);
    const [isLoading, setLoading] = useState(true)

    const setArtworks = (Artworks) => {
        setFilteredArtworks(Artworks);
    };

    const setAvailable = (isAvailable) => {
        setIsAvailableArtworks(isAvailable);
    };

    useEffect(() => {
        async function fetchArtwokrs() {
            setLoading(true);
            try {
                const config = {
                    headers: {
                        'Content-type': 'application/json',
                    }
                };
                const response = await axios.post('http://localhost:5000/candymachine', {
                    pubKey: "GT6RfZrZLgvEZmf1jLAwQGgABDAZDvuUKEQBj8p38FB4"
                    },
                    config
                )
                setPrice(response.data.data.price.basisPoints);
                setFilteredArtworks(response.data.data.items);
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchArtwokrs();
    },[]);

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
            />
            {isLoading && <div className="loader-wrapper">
                <img src='/assets/loader.svg' alt='Loader spinning' />
            </div>}
             {
            /* Available for this Date */} {
                    <SaleCarousel
                        price_sol={
                            price_sol
                        }
                        items={
                            filteredArtworks
                        }
                        isAvailable={
                            isAvailableArtworks
                        }
                        isDesktop={
                            mediaQuery('(min-width: 1200px)')
                        }
                        isLoading={
                            isLoading
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