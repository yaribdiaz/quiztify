import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated:false,
    spotifyRefreshToken:null,
    spotifyToken:null,
}

export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setSpotifyRefreshToken: (state, action) => {
            state.spotifyRefreshToken = action.payload
        },
        setSpotifyToken: (state, action) => {
            state.spotifyToken = action.payload
        },
    }
})

export const {
    setAuthenticated,
    setSpotifyRefreshToken,
    setSpotifyToken
} = authSlice.actions
export const auth = state => state.authStates
export default authSlice.reducer