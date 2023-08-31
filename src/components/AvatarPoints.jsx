import {Badge, Avatar} from "@nextui-org/react";
import { usePlayingStore } from "../hooks/usePlayingStore";
import { useEffect, useState } from "react";


const AvatarPoints = ({points, answer, player}) => {
  const [animation, setAnimation] = useState(false)
  const {
    playingState,

    handleSetCongratulation,
    handleSetCongratsAnswer, 
    song
  } = usePlayingStore()

  useEffect(()=> {
    if(playingState === 'checkAnswer'){
      if(answer === song.track.name){
        handleSetCongratsAnswer(false)
        setAnimation(true)
        setTimeout(() => {
          setAnimation(false)
          handleSetCongratsAnswer(true)
          if(!animation){
          setTimeout(() => {
            handleSetCongratsAnswer(false)
            handleSetCongratulation(true)
          },[2000])
        }

        },2500)


      }else{
        setTimeout(() => {
          handleSetCongratulation(true)
        },[3000])
      }
  }
  },[playingState])

  return (
    <div>
        <Badge content={points} color="success" shape="circle" className={`${animation && 'animate-ping'} font-bold border-white transition-all duration-500`} disableOutline>
        <Avatar
          className={`${animation && 'animate-spin'} bg-black p-1`}
          size="lg"
          isBordered
          radius="full"
          src="https://img.icons8.com/?size=2x&id=mWfVygx0siyT&format=png"
        />
        
      </Badge>
      <p
        className="font-kelly text-center"
      >
        Player {player}
      </p>
    </div>
  )
}

export default AvatarPoints




