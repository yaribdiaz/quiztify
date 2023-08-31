import { useEffect, useState } from "react"
import { usePlayingStore } from "../hooks/usePlayingStore"

const PossibleAnswers = ({handleSetAnswerPlayer,answer}) => {

    const {timeline, possibleAnswers, playingState, song:actualSong} = usePlayingStore()
    const [selected, setSelected] = useState(null)
    console.log(playingState)
    const handleSelectedOption = (index, song) => {
        setSelected(index)
        handleSetAnswerPlayer(song?.track.name)
    }

    useEffect(() => {
        if(!timeline) setSelected(null)
    },[timeline])
    

  return (
    <div className="w-full h-full py-2 rounded-md flex">
      <div className={`w-full flex h-full flex-col items-center justify-center gap-2 p-1 rounded-md transition-all duration-300`}>
            {possibleAnswers.map((song, index) => (
                <div
                    key={song?.track.id}
                    onClick={() => handleSelectedOption(index, song)}
                    className={`${answer && 'pointer-events-none'} ${selected === index && 'border border-white scale-105 bg-gray-950'} ${!timeline ? 'pointer-events-none' : 'hover:bg-black '} ${(answer === actualSong?.track.name && playingState === "checkAnswer") && ' bg-blue-500'} ${(answer !== actualSong?.track.name && playingState === "checkAnswer") && ' bg-red-500'} w-full  flex flex-col bg-gray-800 px-[5px] py-[5px] rounded-md md:px-5 md:py-2  transition-all duration-300 cursor-pointer`} 
                >
                    {/* <p className="text-gray-400 text-tiny md:text-xl line-clamp-1">
                        {song.track?.artists[0].name}
                    </p> */}
                    {/* ${(!timeline || playingState === "checkAnswer") ? 'text-center font-bold text-gray-600' : 'text-white'} */}
                    <p className={`${(timeline || playingState === "checkAnswer") ?  'text-white' : 'text-center font-bold text-gray-600'} line-clamp-1 md:text-2xl md:font-medium`}>
                        {(timeline || playingState === "checkAnswer") ?  song?.track.name : '?'}
                    </p>
                </div>
            ))}

      </div>
      
    </div>
  )
}

export default PossibleAnswers
