import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlistItems:[],
    song:{},
    playingSong:0,
    player:false,
    playerSongEnd:true,
    answerPlayer1:'',
    answerPlayer2:'',
    playingState:'currentSong',
    pointsPlayer1:0,
    pointsPlayer2:0,
    songsToGuess:[],
    possibleAnswers:[],
    timeline:false,
    timelineCount:false,
    pause:false,
    congratsAnswer:false,
    congratulation:false
}

export const playingSlice = createSlice ({
    name: 'playing',
    initialState,
    reducers:{
        setCongratsAnswer: (state, action) => {
            state.congratsAnswer = action.payload
        },
        setCongratulation: (state, action) => {
            state.congratulation = action.payload
        },
        setTimelineCount: (state, action) => {
            state.timelineCount = action.payload
        }, 
        setSong: (state, action) => {
            state.song = action.payload
        },
        setPlayerSongEnd: (state, action) => {
            state.playerSongEnd = action.payload
        },
        setAnswerPlayer1: (state, action) => {
            state.answerPlayer1 = action.payload
        },
        setAnswerPlayer2: (state, action) => {
            state.answerPlayer2 = action.payload
        },
        setPlayingState: (state, action) => {
            state.playingState = action.payload
        },
        setPlaylistItems: (state, action) => {
            state.playlistItems = action.payload
        },
        setPlayingSong: (state,action) => {
            state.playingSong = action.payload
        },
        setPlayer: (state, action) => {
            state.player = action.payload
        },
        setPointsPlayer1: (state, action) => {
            state.pointsPlayer1 = action.payload
        },
        setPointsPlayer2: (state, action) => {
            state.pointsPlayer2 = action.payload
        },
        setSongsToGuess: (state, action) => {
            state.songsToGuess = action.payload
        },
        setPossibleAnswers: (state, action) => {
            state.possibleAnswers = action.payload
        },
        setTimeline: (state, action) => {
            state.timeline = action.payload
        },
        setPause: (state, action) => {
            state.pause = action.payload
        },
        setInitialState: (state, action) => {
            state.playlistItems = action.payload.playlistItems
            state.playingSong = action.payload.playingSong
            state.player = action.payload.player
            state.playerSongEnd = action.payload.playerSongEnd
            state.answerPlayer1 = action.payload.answerPlayer1
            state.answerPlayer2 = action.payload.answerPlayer2
            state.playingState = action.payload.playingState
            state.pointsPlayer1 = action.payload.pointsPlayer1
            state.pointsPlayer2 = action.payload.pointsPlayer2
            state.songsToGuess = action.payload.songsToGuess
            state.possibleAnswers = action.payload.possibleAnswers
            state.timeline = action.payload.timeline
            state.pause = action.payload.pause
        },
    }
})

export const {
    setSong,
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
    setInitialState,
    setCongratsAnswer,
    setCongratulation
} = playingSlice.actions

export const playing = state => state.playingStates

export default playingSlice.reducer