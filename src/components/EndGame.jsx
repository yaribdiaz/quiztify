import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { usePlayingStore } from "../hooks/usePlayingStore"
import FireworksConfetti from "./FirewroksConfetti"

const EndGame = () => {
    const navigate = useNavigate()
    const [winner, setWinner] = useState('')
    const {playingState, pointsPlayer1, pointsPlayer2} = usePlayingStore()
    useEffect(() => {
        chooseWinner()
        if(playingState !== "endgame"){
            navigate('/play')
        } 
    },[])

    const chooseWinner = () => { 
        console.log(pointsPlayer1, pointsPlayer2) 
        if(pointsPlayer1 > pointsPlayer2){ 
            setWinner('Player 1')
        } 
        if(pointsPlayer2 > pointsPlayer1){
            setWinner('Player 2') 
        } 
        if(pointsPlayer1 == pointsPlayer2){ 
            setWinner('Player 1 & Player 2') 
        } 
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <div className="h-full flex flex-col justify-center items-center">
            <div className="border-3 p-2 bg-orange-500/90 shadow-lg shadow-gray-500">
                <div className="p-2 bg-black rounded">
                    <img 
                        src="https://img.icons8.com/?size=512&id=vpPUQCWW7lYo&format=png"
                        alt="trophy"
                        className="w-40 md:w-52 lg:w-64" 
                    />
                    
                </div>
                <p className="mt-1 border-2 border-white font-kelly text-center bg-black text-yellow-500">
                    {winner}                
                </p>
            </div>

            <p className="mt-10 text-white text-3xl lg:text-4xl font-bold">
                ¡CONGRATULATIONS!
            </p>
            {winner === 'Player 1 & Player 2' ? (
            <p className="px-5 md:text-xl text-center">
                Wow, it looks like they are both up to date with the music!
            </p>    
            ): (
            <p className="px-5 md:text-xl text-center">
                You are a great connoisseur of music {' '}
                <span className="font-bold text-orange-400">
                    {winner}
                </span>
            </p>
            )}
            
        </div>
        <Link 
            to={'/play'}
            className="w-4/5 py-2 bg-yellow-500 text-black text-lg font-kelly font-bold mb-10 uppercase text-center"
        >
                Salir
        </Link>
      <FireworksConfetti/>
    </div>
  )
}

export default EndGame
