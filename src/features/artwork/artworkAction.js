import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// artworkAction.js
export const createArtwork = createAsyncThunk(
    // action type string
    'artwork/create',
    // callback function
    async ({ name, image, description, artist_name, price_usd, price_sol }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const userToken = localStorage.getItem('userToken');
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                }
            };
            console.log({ name, image, description, artist_name, price_usd, price_sol });
            // make request to backend
            const response = await axios.post(
                'http://localhost:8000/artworks', // Ici mettre l'adresse de l'API à voir avec Alexis
                { name, image, description, artist_name, price_usd, price_sol },
                config
            )
            console.log(response);
        } catch (error) {
            console.log("Error :", error.response.data.error);
            // return custom error message from API if any
            if (error.response && error.response.data.error) {
                return rejectWithValue(error.response.data.error)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const editArtwork = createAsyncThunk(
    'artwork/update',
    async ({ description, artworkId }, { rejectWithValue }) => {
        try {
            const userToken = localStorage.getItem('userToken');
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                }
            };
            const response = await axios.patch(
                `http://localhost:8000/artworks/${artworkId}`, // Ici mettre l'adresse de l'API à voir avec Alexis
                { description },
                config
            )
            console.log(response);
        } catch (error) {
            console.log("Error :", error.response.data.error);
            // return custom error message from API if any
            if (error.response && error.response.data.error) {
                return rejectWithValue(error.response.data.error)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const deleteArtwork = createAsyncThunk(
    'artwork/delete',
    async ({ artworkId }, { rejectWithValue }) => {
        try {
            const userToken = localStorage.getItem('userToken');
            const headers = {
                'Authorization': `Bearer ${userToken}`,
            }
            const response = await axios.delete(
                `http://localhost:8000/artworks/${artworkId}`, // Ici mettre l'adresse de l'API à voir avec Alexis
                { headers }
            )
            console.log(response);
        } catch (error) {
            console.log("Error :", error.response.data.error);
            // return custom error message from API if any
            if (error.response && error.response.data.error) {
                return rejectWithValue(error.response.data.error)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
