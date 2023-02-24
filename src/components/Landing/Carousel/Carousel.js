import './style.scss'
import {
    Fragment,
    useEffect,
    useState
} from 'react';
import Cards from './Cards/Cards';
import mediaQuery from './MediaQuery/MediaQuery';

function Carousel() {
    const [price_sol, setPrice] = useState(0);
    const [nfts, setNfts] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchArtwokrs() {
            setLoading(true);
            try {
                const response = await fetch('https://nftcarousel.onrender.com/candymachine', {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        },
                    body: JSON.stringify({
                        pubKey: "GT6RfZrZLgvEZmf1jLAwQGgABDAZDvuUKEQBj8p38FB4",
                        }),
                    },
                )
                const responseJSON = await response.json();
                    console.log(responseJSON);
                setPrice(responseJSON.data.price.basisPoints);
                setNfts(responseJSON.data.items);
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
 
        <section className='carousel'>
            <div className="carousel_header">
                <div className='carousel_header-title'>
                    <h3>NFT <span className='carousel-span'>Carousel</span></h3>
                    <h4 className='carousel_header-subtitle'>Sample of a few NFTs from Brushizer Collection. Metadata displayed on the cards are being fetched from Solana devnet through this custom <a href='https://github.com/AlexisFaugeroux/NFT-Carousel-Backend' className='API-link'>API</a>.</h4>
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