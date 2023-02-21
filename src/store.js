import { configureStore } from '@reduxjs/toolkit';
import artworkReducer from '../src/features/artwork/artworkSlice';

export const store = configureStore({
    reducer: {
        artwork: artworkReducer,
    },
});

export default store