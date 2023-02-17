import artworks from '../../../../../../data/artworks.json';

export function getCurrentDate() {
    /* Get Current Date accorded to Artworks Sales_Dates */
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    
    return `${year}-${month}-${day}`;
};

export function getDailyArtworks() {
    /* Get Daily Artworks by cutting out Sales_Dates */
    const newArtworks = artworks.filter((artwork) => (
        (artwork.sale_date.slice(0,10)) === getCurrentDate())
    );

    return newArtworks;
};

// 1. Actually, getCurrentDate() return a "String" Type => 2022-12-23 
// 2. We need to format it as "Date" type for find the Correct Range => Fri Dec 23 2022...
// 3. After that we have to re-format all the Ranges to our original "String" Type => 2022-12-23 
// 4. And finally, filter Each Artworks by this String Types

export function getDailyRangeArtworks(range) {
    /* Format to Date Type & Get End Date (Now) */
    const endDate = new Date(getCurrentDate());
    /* Format to Date Type & Get Start Date (Now - Range Variable) */
    const startDate = new Date(getCurrentDate());
    const date = new Date(startDate.getTime());
    date.setDate(date.getDate() - range);
  
    /* Push all Dates Results in a Array */
    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    /* Re-format and Push all results to new Array */
    const originalFormatDates = [];
    dates.forEach((date) => {
        originalFormatDates.push(`${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`)
    });

    const newArtworks = [];
    artworks.forEach((artwork) => {
        if (originalFormatDates.indexOf(artwork.sale_date.slice(0,10)) !== -1) {
            newArtworks.push(artwork);
        }
    });

    return newArtworks;
  }