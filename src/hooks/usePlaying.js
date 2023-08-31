import React from "react"
import { usePlayingStore } from "./usePlayingStore"
import { useChooseStore } from "./useChooseStore"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const usePlaying = () => {
    // Creamos una referencia al elemento audio
    const audioRef = React.createRef();
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
        player,
        song,
        handleSetSong,
        playingSong,
        playerSongEnd,
        playingState,
        timeline,
        handleSetPlayingSong,
        handleSetPlayingState,
        handleSetSongsToGuess,
        handleSetPossibleAnswers,
        handleSetPlayer,
        handleSetPlayerSongEnd,
        handleSetTimeline,
        handleSetTimelineCount,
        handleSetCongratsAnswer,
        congratsAnswer,
        handleSetCongratulation,
        congratulation
    } = usePlayingStore()
    
        // ? Amount Songs
        //console.log(playlistItems.length)
        // ? Preview
        //playlistItems.map(song => console.log('preview',song.track.preview_url))
        // ? Artist
        //playlistItems.map((song, index)=> console.log('artist',song.track.artists[0].name))
        // ? Song Name
        //playlistItems.map((song, index)=> console.log('song',song.track.name))

    

    // useEffect(()=>{

    // },[])
    const currentSong = () => {
        console.log('introduciendo cancion')
        handleSetAnswerPlayer1('')
        handleSetAnswerPlayer2('')
        
        //console.log(playlistItems[songsToGuess[playingSong]])
        handleSetSong(playlistItems[songsToGuess[playingSong]])
        //console.log('song',song)
        handleSetPlayingState('song')
        //console.log(songsToGuess, songsToGuess.length-1)
    }

    const playing = () => {
        console.log('tocando cancion')
        handleSetPlayerSongEnd(true)
        handleSetPlayer(false)
    }
    useEffect(()=>{
        if(playerSongEnd === false && playingState === 'song') handleSetPlayingState('generateAnswers')
    },[playerSongEnd])

    const generateAnswers = () => {
        console.log('generando respuestas')
        // Función que genera el arreglo de números aleatorios
            let correctAnswer = songsToGuess[playingSong]
            let items = playlistItems
            // Crear un conjunto vacío para almacenar los números únicos
            let set = new Set();
            // Añadir el número fijo al conjunto
            set.add(correctAnswer);
            // Mientras el conjunto tenga menos de 10 elementos
            while (set.size < 4) {
            // Generar un número aleatorio entre 0 y el valor máximo
            let random = Math.floor(Math.random() * (items.length + 1));
            // Añadir el número aleatorio al conjunto
            set.add(random);
            }
            // Convertir el conjunto en un arreglo
            let array = [...set];
            // Generar un índice aleatorio entre 0 y 9
            let randomIndex = Math.floor(Math.random() * 4);
            // Intercambiar el número fijo con el número en el índice aleatorio
            let temp = array[randomIndex];
            array[randomIndex] = correctAnswer;
            array[0] = temp;
            // Devolver el arreglo

            const possibleAnswers = array.map((song) => playlistItems[song])
            handleSetPossibleAnswers(possibleAnswers)

        handleSetPlayingState('timeline')
    }

    const timelineState = () => {
        handleSetTimeline(true)
    }
    useEffect(()=>{
        if(answerPlayer1 === song?.track?.name ) {
            console.log('+1 player 1')
            handleSetTimelineCount(true)
            return handleSetPlayingState('checkAnswer')
        }
        if(answerPlayer2 === song?.track?.name) {
            console.log('+1 player 2')
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

        console.log('aumentando playingSong')
        
        let currentTrack = playingSong
        handleSetPlayingSong(currentTrack+1) //aumenta 1 
        handleSetPlayingState('currentSong')
        console.log('')
    }



    //TODO playing State
    //? 'song' tocar cancion
    //? 'generateAnswers' generar posibles respuestas
    //? 'timeline' cuenta regresiva de barra
    //? 'checkAnswer' verificar respuestas
    //? 
 
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

               
    // },[playerSongEnd, timeline])


    return {
       
    }
}