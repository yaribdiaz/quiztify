import { usePlayingStore } from "./usePlayingStore"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const usePlaying = () => {
    const navigate = useNavigate()

    const {
        pointsPlayer1,
        handleSetPointsPlayer1,
        pointsPlayer2,
        handleSetPointsPlayer2,
        answerPlayer1,
        handleSetAnswerPlayer1,
        handleSetAnswerPlayer2,
        answerPlayer2,
        playlistItems,
        songsToGuess,
        song,
        handleSetSong,
        playingSong,
        playerSongEnd,
        playingState,
        timeline,
        handleSetPlayingSong,
        handleSetPlayingState,
        handleSetPossibleAnswers,
        handleSetPlayer,
        handleSetPlayerSongEnd,
        handleSetTimeline,
        handleSetTimelineCount,
        handleSetCongratulation,
        congratulation
    } = usePlayingStore()
    
    const currentSong = () => {
        handleSetAnswerPlayer1('')
        handleSetAnswerPlayer2('')

        handleSetSong(playlistItems[songsToGuess[playingSong]])
        handleSetPlayingState('song')
    }

    const playing = () => {
        handleSetPlayerSongEnd(true)
        handleSetPlayer(false)
    }
    useEffect(()=>{
        if(playerSongEnd === false && playingState === 'song') handleSetPlayingState('generateAnswers')
    },[playerSongEnd])

    const generateAnswers = () => {
            let correctAnswer = songsToGuess[playingSong]
            let items = playlistItems
            let set = new Set();
            set.add(correctAnswer);
            while (set.size < 4) {
            let random = Math.floor(Math.random() * (items.length + 1));
            // Añadir el número aleatorio al conjunto
            set.add(random);
            }
            let array = [...set];
            let randomIndex = Math.floor(Math.random() * 4);
            let temp = array[randomIndex];
            array[randomIndex] = correctAnswer;
            array[0] = temp;
            const possibleAnswers = array.map((song) => playlistItems[song])
            handleSetPossibleAnswers(possibleAnswers)

        handleSetPlayingState('timeline')
    }

    const timelineState = () => {
        handleSetTimeline(true)
    }
    useEffect(()=>{
        if(answerPlayer1 === song?.track?.name ) {
            handleSetTimelineCount(true)
            return handleSetPlayingState('checkAnswer')
        }
        if(answerPlayer2 === song?.track?.name) {
            handleSetTimelineCount(true)
            return handleSetPlayingState('checkAnswer')    
        }
        
        if(timeline === false && playingState==='timeline')return handleSetPlayingState('checkAnswer')
    },[timeline, answerPlayer1, answerPlayer2 ])

    const checkAnswer = () => {
        handleSetCongratulation(false)
            if(answerPlayer1 === song?.track?.name ) {
            let points1= pointsPlayer1
            handleSetPointsPlayer1(points1+1) 
            }

            if(answerPlayer2 === song?.track?.name) {
            let points2= pointsPlayer2
            handleSetPointsPlayer2(points2+1)
            }
            handleSetTimelineCount(false)     
    }

    useEffect(() => {
        if(congratulation && playingState === "checkAnswer") handleSetPlayingState('nextSong')
    },[congratulation])
    

    const nextSong = () => {  
        let currentTrack = playingSong
        handleSetPlayingSong(currentTrack+1) //aumenta 1 
        handleSetPlayingState('currentSong')
    }
 
    useEffect(() => {
        if(playingSong === songsToGuess.length) {            
            handleSetPlayingState('endgame')
            navigate('/play/endgame')
            return
        }
        if(playingState === 'currentSong') currentSong()
        if(playingState === 'song') playing()
        if(playingState === 'generateAnswers') generateAnswers()
        if(playingState === 'timeline') timelineState()
        if(playingState === 'checkAnswer') checkAnswer()
        if(playingState === 'nextSong') nextSong()
    },[playingState, playingSong]) // playingSong

    return {
       
    }
}