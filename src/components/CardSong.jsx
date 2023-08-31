import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useState } from "react";
import { usePlayingStore } from "../hooks/usePlayingStore";
import cdIcon from "../assets/cd-icon.png"

const CardSong = () => {
    const [result, setResult] = useState(false)
    const {song, playingState} = usePlayingStore()
    setTimeout(() => {
        setResult(true)
    }, 5000);
    
    return (
        <Card className=" py-1 w-60">
          {song !== undefined ? (
          <>
          {playingState === "checkAnswer" && (
          <>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <small 
                className={`text-default-500 md:text-lg line-clamp-1 md:line-clamp-none`}
            >
                {song.track?.artists[0].name}
            </small>
            <h4 
                className={`text-center font-bold md:text-xl line-clamp-2`}
            >
                {song.track?.name}
            </h4>
          </CardHeader>
          </>
          )}

          <CardBody className="w-full relative overflow-visible py-2 flex justify-center items-center">
          <div className="relative w-full translate-x-0  md:translate-x-2 translate-y-4 flex justify-end items-center z-40">
              <span className=" relative flex justify-center items-center h-7 w-7 z-20">
              <span className={`${playingState === "song" && 'animate-ping'}  absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75`}>  
              </span>
              <span className={`${playingState === "song" && 'animate-spin'}  relative  inline-flex justify-center items-center rounded-full h-6 w-6 p-[1px] bg-green-600`}>
                <img src={cdIcon} alt="cd icon"/>
              </span>
              </span>
            </div>
            <Image
              alt="Card background"
              className="relative opacity-75 w-44 md:w-80 rounded-xl"
              src={song.track?.album.images[0]?.url}
              width={200}
            />  
          </CardBody>
          </>
          ):
          <p>cargando...</p>}
        </Card>
      );
}

export default CardSong
