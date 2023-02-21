import React from 'react';

const FilterContext = React.createContext({
    // Variables
    sortArtworkState: '',
    tagsState: [],
    searchState: [],
    searchText: [],
    checkboxStateShp: [],
    checkboxStateBgd: [],
    checkboxStateShc: [],
    collectionsState: [],
    formsState: [],
    countState: 0,
    // Functions
    sortArtworkByPrice: () => {},
    searchChange: () => {},
    checkboxChange: () => {},
    checkboxesReset: () => {},
    collectionsChange: () => {},
    addActivesForms: () => {},
    removeActivesForms: () => {},
    countChange: () => {}
});

export default FilterContext;