import { useReducer } from "react";
import { ShapeOptions, BackgroundOptions, ShapecolorOptions } from "../data/data";
import FilterContext from './filter-context';

import artworks from '../../../data/artworks.json';

// Initial State
const defaultChekboxState = {
    sortArtworkState: 'Price low to high',
    tagsState: [],
    searchState:  new Array(...artworks),
    searchText: '',
    checkboxStateShp: new Array(ShapeOptions.length).fill(false),
    checkboxStateBgd: new Array(BackgroundOptions.length).fill(false),
    checkboxStateShc: new Array(ShapecolorOptions.length).fill(false),
    collectionsState: new Array(...artworks),
    formsState: [],
    countState: 0
};

// Actions Reducer
const collectionReducer = (state, action) => {
    switch (action.type) {
        case 'SORT':
            return {
                ...state,
                sortArtworkState: action.payload
            };
        case 'SEARCH':
            if (action.payload === '') {
                return {
                    ...state,
                    searchText: action.payload,
                    searchState: new Array(...artworks)
                }
            } else {
                return {
                    ...state,
                    searchText: action.payload,
                    searchState: artworks.filter((artwork) => artwork.name.toLowerCase().match(action.payload))
                };
            };
        case 'SHAPE':
            return {
                ...state,
                checkboxStateShp: !state.checkboxStateShp[action.payload]
            };
        case 'BACKGROUND':
            return {
                ...state,
                checkboxStateBgd: !state.checkboxStateBgd[action.payload]
            };
        case 'SHAPE_COLOR':
            return {
                ...state,
                checkboxStateShc: !state.checkboxStateShc[action.payload]
            };
        case 'RESET':
            defaultChekboxState['sortArtworkState'] = state.sortArtworkState;
            return defaultChekboxState;
        case 'COLLECTION':
            return {
                ...state,
                collectionsState: action.payload
            };
        case 'ADD_FORMS':
            const capitalizeValue = action.payload.value.charAt(0).toUpperCase() + action.payload.value.slice(1);

            return {
                ...state,
                tagsState: [...state.tagsState, capitalizeValue],
                formsState: [...state.formsState, action.payload]
            };
        case 'REMOVE_FORMS':
            const index = state.formsState.findIndex(object => {
                return (
                object.value === action.payload.checkboxValue
                && object.form === action.payload.formsTitle
                );
            });

            state.formsState.splice(index, 1);
            state.tagsState.splice(index, 1);

            return {
                ...state,
                tagsState: state.tagsState,
                formsState: state.formsState
            };
        case 'COUNT':
            return {
                ...state,
                countState: action.payload
            }
        default:
        return defaultChekboxState;
    };
};

const FilterProvider = props => {
    // useReducer
    const [collectionState, dispatchCollectionAction] = useReducer(collectionReducer, defaultChekboxState);

    // Checkbox Dispatchers
    const checkboxChangeHandler = (title, position) => {
        switch (title) {
            case 'shape':
                dispatchCollectionAction({type: 'SHAPE', payload: position});
            break;

            case 'background':
                dispatchCollectionAction({type: 'BACKGROUND', payload: position});
            break;

            case 'shape_color':
                dispatchCollectionAction({type: 'SHAPE_COLOR', payload: position});
            break;
            
            default:
            break;
        };
    };

    // All Other Dispatchers
    const checkboxesResetHandler = () => {
        dispatchCollectionAction({type: 'RESET', payload: 0});
    };

    const sortArtworkByPriceHandler = (sortValue) => {
        dispatchCollectionAction({type: 'SORT', payload: sortValue});
    };

    const collectionsChangeHandler = (collections) => {
        dispatchCollectionAction({type: 'COLLECTION', payload: collections});
    };

    const addActivesFormsHandler = (newForm) => {
        dispatchCollectionAction({type: 'ADD_FORMS', payload: newForm});
    };

    const removeActivesFormsHandler = (checkboxValue, formsTitle) => {
        dispatchCollectionAction(
            {
                type: 'REMOVE_FORMS', 
                payload: {
                    checkboxValue, 
                    formsTitle}
            });
    };

    const countChangeHandler = (count) => {
        dispatchCollectionAction({type: 'COUNT', payload: count });
    };

    const searchChangeHandler = (searchText) => {
        dispatchCollectionAction({type: 'SEARCH', payload: searchText});
    }

    const filterContext = {
        // Variables
        sortArtworkState: collectionState.sortArtworkState,
        tagsState: collectionState.tagsState,
        searchState: collectionState.searchState,
        searchText: collectionState.searchText,
        checkboxStateShp: collectionState.checkboxStateShp,
        checkboxStateBgd: collectionState.checkboxStateBgd,
        checkboxStateShc: collectionState.checkboxStateShc,
        collectionsState: collectionState.collectionsState,
        formsState: collectionState.formsState,
        countState: collectionState.countState,
        // Functions
        sortArtworkByPrice: sortArtworkByPriceHandler,
        searchChange: searchChangeHandler,
        checkboxChange: checkboxChangeHandler,
        checkboxesReset: checkboxesResetHandler,
        collectionsChange: collectionsChangeHandler,
        addActivesForms: addActivesFormsHandler,
        removeActivesForms: removeActivesFormsHandler,
        countChange: countChangeHandler
    };

    return(
        <FilterContext.Provider value={filterContext}>
            {props.children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;