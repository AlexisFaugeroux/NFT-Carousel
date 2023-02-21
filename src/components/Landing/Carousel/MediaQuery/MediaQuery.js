import { useMediaQuery } from 'react-responsive';

function MediaQuery(sizeScreen) {
    return useMediaQuery({
        query: sizeScreen
    });
}

export default MediaQuery