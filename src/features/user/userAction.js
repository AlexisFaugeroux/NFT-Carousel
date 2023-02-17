import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// userAction.js
export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async ({ pseudo, email, password, country, role_id }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            // make request to backend
            await axios.post(
                'http://localhost:8000/users/signup', // Ici mettre l'adresse de l'API à voir avec Alexis
                { pseudo, email, password, country, role_id },
                config
            )
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

// In the code block above, we've taken the values from the register form and made a POST request
// to the register route using Axios.
// In the event of an error, thunkAPI.rejectWithValue sends the custom error message from the backend as 
// a payload to the reducer.

export const loginUser = createAsyncThunk(
    // action type string
    'user/login',
    // callback function
    async ({ pseudo, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            // make request to backend
            const { data, status } = await axios.post(
                'http://localhost:8000/users/login', // Ici mettre l'adresse de l'API à voir avec Alexis
                { pseudo, password },
                config
            );
            return { data, status };
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.error) {
                return rejectWithValue(error.response.data.error)
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const deleteUser = createAsyncThunk(
    // action type string
    'user/delete',

    async ({ id, token }, { rejectWithValue }) => {
        try {
            const userToken = localStorage.getItem('userToken');
            const headers = {
                'Authorization': `Bearer ${userToken}`,
            };
            const response = await axios.delete(
                `http://localhost:8000/users/signout/${id}`,
                { headers }
            );
            console.log(response);
            return response;
        } catch (error) {
            if (error.response && error.response.data.error) {
                return rejectWithValue(error.response.data.error)
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

export const logoutUser = createAsyncThunk(
    'user/logout',
    async ({ userToken }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                }
            };
            localStorage.removeItem('userToken');
            localStorage.removeItem('userPseudo');
            localStorage.removeItem('userId');
            await axios.post('http://localhost:8000/users/logout', {}, config);
            // state.userInfo = null;
            // state.userToken = undefined;
        } catch (error) {
            if (error.response && error.response.data.error) {
                return rejectWithValue(error.response.data.error)
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)


