import { useSelector, useDispatch } from "react-redux";
import { playing } from "../redux/playing/playingSlice";

import {
    setPlaylistItems,
    setPlayingSong,
    setPlayer,
    setPlayerSongEnd,
    setAnswerPlayer1,
    setAnswerPlayer2,
    setPlayingState,
    setPointsPlayer1,
    setPointsPlayer2,
    setSongsToGuess,
    setPossibleAnswers,
    setTimeline,
    setTimelineCount,
    setPause,
    setSong,
    setCongratsAnswer,
    setCongratulation
    // setInitialState
} from "../redux/playing/playingSlice"

export const usePlayingStore = () => {
    const dispatch = useDispatch()
    const {
        playlistItems,
        playingSong,
        player,
        playerSongEnd,
        answerPlayer1,
        answerPlayer2,
        playingState,
        pointsPlayer1,
        pointsPlayer2,
        songsToGuess,
        possibleAnswers,
        timeline,
        timelineCount,
        pause,
        song,
        congratsAnswer,
        congratulation
    } = useSelector(playing)

    const handleSetCongratsAnswer = (bool) => {
        dispatch(setCongratsAnswer(bool))
    }

    const handleSetCongratulation = (bool) => {
        dispatch(setCongratulation(bool))
    }

    const handleSetTimelineCount = (bool) => {
        dispatch(setTimelineCount(bool))
    }

    const handleSetSong = (song) => {
        dispatch(setSong(song))
    }

    const handleSetPlayerSongEnd = (bool) => {
        dispatch(setPlayerSongEnd(bool))
    }

    const handleSetAnswerPlayer1 = (answer) => {
        dispatch(setAnswerPlayer1(answer))
    }

    const handleSetAnswerPlayer2 = (answer) => {
        dispatch(setAnswerPlayer2(answer))
    }

    const handleSetPlayingState = (playState) => {
        dispatch(setPlayingState(playState))
    }

    const handleSetPlaylistItems = (songs) => {
        dispatch(setPlaylistItems(songs))
    }

    const handleSetPlayingSong = (value) => {
        dispatch(setPlayingSong(value))
    }

    const handleSetPlayer = (player) => {
        dispatch(setPlayer(player))
    }

    const handleSetPointsPlayer1 = (points) => {
        dispatch(setPointsPlayer1(points))
    }
    
    const handleSetPointsPlayer2 = (points) => {
        dispatch(setPointsPlayer2(points))
    }

    const handleSetSongsToGuess = (randomSongs) => {
        dispatch(setSongsToGuess(randomSongs))
    }

    const handleSetPossibleAnswers = (possibleAnswers) => {
        dispatch(setPossibleAnswers(possibleAnswers))
    }

    const handleSetTimeline = (bool) => {
        dispatch(setTimeline(bool))
    }

    const handleSetPause = (bool) => {
        dispatch(setPause(bool))
    }

    const handleSetPlayingInitialState = () => {
        // const initialState = {
        //     playlistItems:[],
        //     playingSong:0,
        //     player:false,
        //     playerSongEnd:true,
        //     answerPlayer1:'',
        //     answerPlayer2:'',
        //     playingState:'currentSong',
        //     pointsPlayer1:0,
        //     pointsPlayer2:0,
        //     possibleAnswers:[],
        //     songsToGuess:[],
        //     timeline:false,
        //     pause:false,
        // }
        // dispatch(setInitialState(initialState))
    }

    return{
        /* functions */
        handleSetPlayingInitialState,
        handleSetPlayerSongEnd,
        handleSetAnswerPlayer1,
        handleSetAnswerPlayer2,
        handleSetPlayingState,
        handleSetPlaylistItems,
        handleSetPlayingSong,
        handleSetPlayer,
        handleSetPointsPlayer1,
        handleSetPointsPlayer2,
        handleSetSongsToGuess,
        handleSetPossibleAnswers,
        handleSetTimeline,
        handleSetTimelineCount,
        handleSetPause,
        handleSetSong,
        handleSetCongratsAnswer,
        handleSetCongratulation,
        /* states */
        song,
        playlistItems,
        playingSong,
        player,
        playerSongEnd,
        answerPlayer1,
        answerPlayer2,
        playingState,
        pointsPlayer1,
        pointsPlayer2,
        songsToGuess,
        possibleAnswers,
        timeline,
        timelineCount,
        pause,
        congratsAnswer,
        congratulation
    }
}