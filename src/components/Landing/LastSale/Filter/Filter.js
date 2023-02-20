// import artworks from '../../../../data/artworks.json';
// import salesOptions from './Utils/Options/LastSaleOptions';
// import { Dropdown } from 'semantic-ui-react';
// import { getDailyArtworks, getDailyRangeArtworks } from './Utils/Date/FunctionsDate';
import '../style.scss';

const Filter = (props) => {
    // function onFiltered(event) {
    //     // Depending on the Filtered Value...
    //     switch (event.target.textContent) {
    //         case "All":
    //         props.onSetArtworks(artworks);
    //         props.onSetAvailable(true);
    //         break;
    //         case "Daily":
    //         if (Object.keys(getDailyArtworks()).length === 0) return props.onSetAvailable(false);
    //         props.onSetArtworks(getDailyArtworks());
    //         props.onSetAvailable(true);
    //         break;
    //         case "Weekly":
    //         if (!(getDailyRangeArtworks(7).length)) return props.onSetAvailable(false);
    //         props.onSetArtworks(getDailyRangeArtworks(7));
    //         props.onSetAvailable(true);
    //         break;
    //         case "Monthly":
    //         if (!(getDailyRangeArtworks(30).length)) return props.onSetAvailable(false);
    //         props.onSetArtworks(getDailyRangeArtworks(30));
    //         props.onSetAvailable(true);
    //         break;
    //         default:
    //         props.onSetArtworks(artworks);
    //         props.onSetAvailable(true);
    //         break;
    //     }
    // };

    return(
        <div className="last_header">
        <div className='last_header-title'>
            <h3>Brushizer <span className='sale-span'>Collection</span></h3>
        </div>
        {/* <div className='last_header-options'>
            <Dropdown
            className="last_header-options-box"
            defaultValue={"All"} 
            selection fluid 
            options={salesOptions}
            onChange={onFiltered} />
            <div className='last_header-options-seeall'>
                See all
            </div>
        </div> */}
        </div>
    );
};

export default Filter;