// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from './userAction';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
const userPseudo = localStorage.getItem('userPseudo') ? localStorage.getItem('userPseudo') : null
const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : null

const initialState = {
    loading: false,
    userInfo: (userToken && userPseudo && userId) ? { pseudo: userPseudo, token: userToken, id: userId } : null, // for user object
    userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        // login user
        [loginUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.data
            state.userToken = payload.token
            localStorage.setItem('userToken', payload.data.token);
            localStorage.setItem('userPseudo', payload.data.pseudo);
            localStorage.setItem('userId', payload.data.id);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            state.loginSuccess = false
        },
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.success = true // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // logout user
        [logoutUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [logoutUser.fulfilled]: (state) => {
            state.loading = false
            state.error = null
        },
        [logoutUser.rejected]: (state) => {
            state.loading = false
            state.error = null
        }
    },
})

export default userSlice.reducer;
