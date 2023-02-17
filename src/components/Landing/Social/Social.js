import './style.scss';
import { useEffect } from 'react';

function Social() {
    useEffect(() => {   
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("social_container_wrapper")[0].appendChild(script);
    }, []);

    return (
        <>
            <section className='social'>

                <div className='social_container'>
                    
                    <div className='social_container_wrapper'>
                        <a class="twitter-timeline" href="https://twitter.com/brushizer?ref_src=twsrc%5Etfw"> </a>
                    </div>
                    
                </div>
                
            </section>
        </>
    );
}

export default Social;