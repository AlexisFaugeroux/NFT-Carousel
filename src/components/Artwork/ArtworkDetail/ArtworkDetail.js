import { Icon } from 'semantic-ui-react';
import { useEffect, useRef } from 'react';
import './style.scss'

function ArtworkDetail({ artwork }) {

    const containerRef = useRef(null);
    // Use the useEffect hook to set the font size when the component mounts
    useEffect(() => {

        const numCharacters = containerRef.current.textContent.length;
        // Get the width of the container element
        const containerWidth = containerRef.current.offsetWidth;

        // Set the font size based on the container width
        if (numCharacters > 15 || numCharacters <= 4) {
            containerRef.current.style.display = `none`;
        }

        if (numCharacters === 5) {
            containerRef.current.style.fontSize = `${containerWidth / 3.15}px`;
        }
        if (numCharacters === 6) {
            containerRef.current.style.fontSize = `${containerWidth / 3.8}px`;
        }
        if (numCharacters === 7) {
            containerRef.current.style.fontSize = `${containerWidth / 4.05}px`;
        }
        if (numCharacters === 8) {
            containerRef.current.style.fontSize = `${containerWidth / 4.8}px`;
        }
        if (numCharacters === 9) {
            containerRef.current.style.fontSize = `${containerWidth / 5.2}px`;
        }
        if (numCharacters === 10) {
            containerRef.current.style.fontSize = `${containerWidth / 5.75}px`;
        }
        if (numCharacters === 11) {
            containerRef.current.style.fontSize = `${containerWidth / 6.35}px`;
        }
        if (numCharacters === 12) {
            containerRef.current.style.fontSize = `${containerWidth / 6.85}px`;
        }
        
        
    }, []); // The empty array ensures that this only runs on mount

    return (
        <>
            <div className='artwork_informations'>
                <h5 ref={containerRef} className='artwork_informations_background'>Brushizer</h5>

                <button className='artwork_informations--prev-btn'>
                    <Icon name='chevron left' size='large' className='chevron-left'/></button>

                <div className='artwork'>
                    <h2 className='artwork_title'>{artwork.name}</h2>
                    <div className='artwork_wrapper'>
                        <div className='artwork_wrapper_image'>
                            <div className='artwork_wrapper_image-img'>
                                <img src={`/assets/artworks/${artwork.image}`} alt='artwork preview'></img>
                            </div>
                            <div className='artwork_wrapper_image_buttons'>
                                <button className='artwork_wrapper_image_buttons-bid'>PLACE A BID</button>
                                <button className='artwork_wrapper_image_buttons-buy'>BUY NOW</button>
                            </div>
                        </div>

                        <div className='artwork_detail'>
                            <div className='artwork_detail_content'>
                                <div className='artwork_infos'>
                                    <div className='artwork_infos-artist'>{artwork.artist_name}</div>
                                    <div className='artwork_infos-collection'>Brushizer</div>
                                </div>
                                <div className='artwork_scope'>
                                    <div className='artwork_scope_prices'>
                                        <img src={`/assets/logos/solanaLogoMark.svg`}
                                        alt='Solana logo'
                                        className='solana-logo' />
                                        <div className='artwork_scope_prices-crypto'>
                                            {artwork.price_sol} SOL
                                        </div>
                                        <div className='artwork_scope_prices-currency'>
                                            ($ {artwork.price_usd})
                                        </div>
                                        <Icon name='check circle' size='large' className='chevron-left'/>
                                    </div>
                                    
                                    <div className='artwork_scope_social'>
                                        <Icon name='heart outline' size='large' className='chevron-left'/>
                                        <Icon name='share alternate' size='large' className='chevron-left'/>
                                    </div>
                                    
                                </div>
                                <div className='artwork_description info-header'>
                                    <div className='artwork_description-title'>Description</div>
                                    <div className='artwork_description-content'>
                                        {artwork.description}
                                    </div>
                                </div>
                                <div className='artwork_attributes info-header'>
                                    <div className='artwork_attributes-title'>Attributes</div>
                                    <div className='artwork_attributes_wrapper'>
                                        <div className='attribute'>
                                            <p className='attribute-name'>Background</p>
                                            <p className='attribute-value'>{artwork.attributes.background}</p>
                                        </div>
                                        <div className='attribute'>
                                            <p className='attribute-name'>Shape</p>
                                            <p className='attribute-value'>{artwork.attributes.shape}</p>
                                        </div>
                                        <div className='attribute'>
                                            <p className='attribute-name'>Shape-color</p>
                                            <p className='attribute-value'>{artwork.attributes.shape_color}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='artwork_informations--next-btn'>
                <Icon name='chevron right' size='large' className='chevron-right'></Icon></button>
            </div>
        </>
    );
}

export default ArtworkDetail;
