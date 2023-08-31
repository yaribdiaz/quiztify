import { useState, useEffect, useRef } from "react"

import { usePlayingStore } from "../hooks/usePlayingStore"
import { usePlaying } from "../hooks/usePlaying"
import AvatarPoints from "./AvatarPoints"
import BarTime from "./BarTime"
import CardSong from "./CardSong"
import PauseGame from "./PauseGame"
import PossibleAnswers from "./PossibleAnswers"
import Carreritas from "./Carreritas"
import CongratsAnswer from "./CongratsAnswer"

const Playing = () => {

  usePlaying()
  const {
    pointsPlayer1, 
    pointsPlayer2,
    handleSetAnswerPlayer1,
    answerPlayer1,
    answerPlayer2,
    handleSetAnswerPlayer2,
    pause:gamePause,
    song,
    player:pause, // ? PLAY/PAUSE
    handleSetPlayer,
    playerSongEnd:play,
    handleSetPlayerSongEnd:setPlay, // ? THE END SONG O START
  } = usePlayingStore()

console.log(answerPlayer1, answerPlayer2)
    // Creo una referencia al elemento de audio
    const audioRef = useRef();
    // Creo un efecto que se ejecuta cuando cambia el valor de play
    useEffect(() => {
      if(song?.track){
      // Si play es verdadero, reproduzco el audio
        if (play) {
          
          audioRef?.current.play();
        } else {
          // Si play es falso, pauso el audio y lo reinicio
          audioRef?.current.pause();
          audioRef.current.currentTime = 0;
        }
      }
    }, [play]);
  
    // Creo un efecto que se ejecuta cuando cambia el valor de pause
    useEffect(() => {
      // Si pause es verdadero, pauso el audio
      if (pause) {
        audioRef?.current.pause();
      } else {
        // Si pause es falso y play es verdadero, reanudo el audio
        if (play && song?.track) {
          audioRef?.current.play();
        }
      }
    }, [pause]);
  
    // Creo una función que se ejecuta cuando termina el audio
    const handleEnded = () => {
      setPlay(false);
    };

  return (
    <div className={`${gamePause ? 'blur-md' : 'blur-none'} w-screen flex flex-col items-center justify-around  h-screen`}>
        <BarTime/>
        <CongratsAnswer/>
        <div className="h-full mt-5 w-full flex flex-col md:items-center">
            
        <div className=" w-full flex flex-col items-center justify-start md:justify-around">
                <CardSong/>
                    <div>
                    {song !== undefined ?
                    <audio ref={audioRef} src={song.track?.preview_url} onEnded={handleEnded}></audio>
                    :
                    <p>cargando...</p>
                    }
                    </div>
            </div>

        <div className="w-full">
          {/* <Carreritas/> */}
        </div>

            <div className="mt-8 w-full justify-around flex items-center">
              <AvatarPoints
                points = {pointsPlayer1}
                answer = {answerPlayer1}
                player= {1}
              />
              <AvatarPoints
                points = {pointsPlayer2}
                answer = {answerPlayer2}
                player={2}
              />    
            </div>


            <div className="w-full justify-center gap-4 md:p-8 flex flex-row items-center">

              <PossibleAnswers
                handleSetAnswerPlayer= {handleSetAnswerPlayer1}
                answer = {answerPlayer1}
              />
              <PossibleAnswers
                handleSetAnswerPlayer= {handleSetAnswerPlayer2}
                answer = {answerPlayer2} 
              />
              
            </div>
            

            <div className="flex w-full justify-center md:mt-0">
                  <PauseGame/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Playing
