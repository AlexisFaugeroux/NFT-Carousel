/* COMPONENTS */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ArtworkNotFound from './ArtworkNotFound/ArtworkNotFound';
import ArtworkDetail from './ArtworkDetail/ArtworkDetail';
import ArtworkMore from './ArtworkMore/ArtworkMore'
import ArtworkDiscover from './ArtworkDiscover/ArtworkDiscover';

/* DATA / MODULES */
import artworks from '../../data/artworks.json';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './style.scss'


function Artwork() {
    const [artwork, setArtwork] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        const findArtwork = async () => {
            // Changer en un fetch vers l'api en back
            setTimeout(async () => {
                try {
                    const response = await axios.get(`http://localhost:8000/artworks/${parseInt(id)}`);
                    setArtwork(response.data);
                    setIsLoading(false);
                } catch (error) {
                    const artwork = artworks.find((item) => item.id === parseInt(id));
                    setArtwork(artwork);
                    setIsLoading(false);
                }
            }, 500);
        }

        findArtwork();
    }, [id])

    return (
        <>
            <Header />
            <section className='artwork_section'>
                {isLoading && <div className="loader-wrapper">
                    <img src='/assets/loader.svg' alt='Loader spinning' />
                </div>}
                {artwork && <ArtworkDetail artwork={artwork} />}
                {artwork === undefined && <ArtworkNotFound />}
                <ArtworkMore />
                <ArtworkDiscover />
            </section>
            <Footer />
        </>
    );
}

export default Artwork;
