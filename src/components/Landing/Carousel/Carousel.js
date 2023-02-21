import './style.scss'
import {
    Fragment,
    useEffect,
    useState
} from 'react';
import Cards from './Cards/Cards';
import mediaQuery from './MediaQuery/MediaQuery';
import axios from 'axios';

function Carousel() {
    const [price_sol, setPrice] = useState(0);
    const [nfts, setNfts] = useState([]);
    const [isLoading, setLoading] = useState(true)

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
                setNfts(response.data.data.items);
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
 
        <section className='last'>
            <div className="last_header">
                <div className='last_header-title'>
                    <h3>NFTs <span className='sale-span'>Carousel</span></h3>
                </div>
            </div>
            {isLoading && <div className="loader-wrapper">
                <img src='/assets/loader.svg' alt='Loader spinning' />
            </div>}
             {
            /* Available for this Date */} {
                    <Cards
                        price_sol={
                            price_sol
                        }
                        items={
                            nfts
                        }
                        isDesktop={
                            mediaQuery('(min-width: 1200px)')
                        }
                        isLoading={
                            isLoading
                        }
                    />
                }
        </section>
        <div className="wave-bottom" >
            <img src="/assets/wave-small-bottom.svg" alt="Wave" />
        </div>
        </Fragment>
                            );
}

export default Carousel;