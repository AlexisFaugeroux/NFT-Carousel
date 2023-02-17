import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/features/user/userSlice';
import artworkReducer from '../src/features/artwork/artworkSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        artwork: artworkReducer,
    },
});

export default store