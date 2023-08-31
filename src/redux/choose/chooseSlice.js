import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:'',
    playlistInfo:'',
    players:'2',
    songs:'10',
    guess:'song'
}

export const chooseSlice = createSlice ({
    name:'choose',
    initialState,
    reducers:{
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setPlaylistInfo:(state, action) => {
            state.playlistInfo = action.payload
        },
        setPlayers:(state, action) => {
            state.players = action.payload
        },
        setSongs:(state, action) => {
            state.songs = action.payload
        },
        setGuess:(state, action) => {
            state.guess = action.payload
        },
        setChooseInitialState:(state, action) => {
            state.search = action.payload.search,
            state.players = action.payload.players,
            state.songs = action.payload.songs,
            state.guess = action.payload.guess
        },
    }
})

export const {
    setSearch,
    setPlaylistInfo,
    setPlayers,
    setSongs,
    setGuess,
    setChooseInitialState
} = chooseSlice.actions

export const choose = state => state.chooseStates

export default chooseSlice.reducer
