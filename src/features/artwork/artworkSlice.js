// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createArtwork, deleteArtwork, editArtwork } from './artworkAction';

const initialState = {
    loading: false,
    error: null,
    success: false, // for monitoring the registration process.
}

const artworkSlice = createSlice({
    name: 'artwork',
    initialState,
    reducers: {},
    extraReducers: {
        [createArtwork.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [createArtwork.fulfilled]: (state) => {
            state.loading = false
            state.error = null
            state.success = true
        },
        [createArtwork.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [editArtwork.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [editArtwork.fulfilled]: (state) => {
            state.loading = true
            state.error = null
        },
        [editArtwork.rejected]: (state, { payload }) => {
            state.loading = true
            state.error = payload
        },
        [deleteArtwork.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [deleteArtwork.fulfilled]: (state) => {
            state.loading = true
            state.error = null
        },
        [deleteArtwork.rejected]: (state, { payload }) => {
            state.loading = true
            state.error = payload
        },
    }
},
)

export default artworkSlice.reducer;
