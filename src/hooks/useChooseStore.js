import { useSelector, useDispatch } from "react-redux";
import { choose } from "../redux/choose/chooseSlice";

import {
    setSearch,
    setPlaylistInfo,
    setPlayers,
    setSongs,
    setGuess,
    setChooseInitialState
} from "../redux/choose/chooseSlice"

export const useChooseStore = () => {
    const dispatch = useDispatch()
    const {
        search,
        playlistInfo,
        players,
        songs,
        guess
    } = useSelector(choose)

    const handleSetSearch = (searching) => {
        dispatch(setSearch(searching))
    }

    const handleSetPlaylistInfo = (data) => {
        dispatch(setPlaylistInfo(data))
    }

    const handleSetPlayers = (numberPlayers) => {
        dispatch(setPlayers(numberPlayers))
    }

    const handleSetSongs = (numberSongs) => {
        dispatch(setSongs(numberSongs))
    }

    const handleSetGuess = (toGuess) => {
        dispatch(setGuess(toGuess))
    }

    const handleSetChooseInitialState = () => {
        const initialState = {
            playlistInfo:'',
            players:'2',
            songs:'10',
            guess:'song'
        }
        dispatch(setChooseInitialState(initialState))
    }

    return{
        /* functions */
        handleSetSearch,
        handleSetPlaylistInfo,
        handleSetPlayers,
        handleSetSongs,
        handleSetGuess,
        handleSetChooseInitialState,
        /* states */
        search,
        playlistInfo,
        players,
        songs,
        guess
    }
}