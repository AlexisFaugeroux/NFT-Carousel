import './style.scss'
import { Link } from 'react-router-dom';

function ArtworkNotFound() {
    return (
        <div className='notfound'>
            <h3 className='notfound-title'>Oops !</h3>
            <p className='notfound-content'>It looks like the artwork you're looking for does not exist yet.</p>
            <p className='notfound-return'>Return to <Link to='/' className='notfound-home'>home here</Link>.</p>
        </div>
    );
}

export default ArtworkNotFound;
