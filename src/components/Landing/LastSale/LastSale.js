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
    // const [filteredArtworks, setFilteredArtworks] = useState([...artworks]);
    // const [isAvailableArtworks, setIsAvailableArtworks] = useState(true);

    // const setArtworks = (Artworks) => {
    //     setFilteredArtworks(Artworks);
    // };

    // const setAvailable = (isAvailable) => {
    //     setIsAvailableArtworks(isAvailable);
    // };

    const [filteredArtworks, setFilteredArtworks] = useState([]);
    const [isAvailableArtworks, setIsAvailableArtworks] = useState(true);

    const setArtworks = (Artworks) => {
        setFilteredArtworks(Artworks);
    };

    const setAvailable = (isAvailable) => {
        setIsAvailableArtworks(isAvailable);
    };

    useEffect(() => {
        async function fetchArtwokrs() {
            try {
                const config = {
                    headers: {
                        'Content-type': 'application/json',
                    }
                };
                const response = await axios.post('http://localhost:5000/owner', {
                    pubKey: "356UHUNCRzR9mN2jDFwUTaopjdUcaFP6owtybMkuHWFo"
                    },
                    config
                )
                console.log(response.data.data);
                
                setFilteredArtworks(response.data.data);
            } catch (error) {
                console.log(error);
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