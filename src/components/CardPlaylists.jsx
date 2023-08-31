import { Link, useNavigate } from "react-router-dom";
import { Image} from "@nextui-org/react";
import { useChooseStore } from "../hooks/useChooseStore";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const CardPlaylists = ({playlist}) => {
    const params = useParams()
    const {handleSetPlaylistInfo} = useChooseStore()

    const navigate = useNavigate()
    const {playlistInfo} = useChooseStore()
    const {id} = playlistInfo

    useEffect(() => {
        if(params?.id !== id) navigate('/play')
    },[])

    const handlePlaylistSelected = () => {
        handleSetPlaylistInfo(playlist)
    }
    
  return (
      <Link
        to={`${playlist?.id}`}
        onClick={handlePlaylistSelected} 
        className={`${params?.id && 'pointer-events-none'} py-1 hover:saturate-0 h-48 md:h-full w-36 md:w-60 flex flex-col justify-between bg-zinc-800 hover:bg-zinc-700 rounded-md cursor-pointer transition-all duration-300`}
      >
        <div className="p-2">
            <Image
                className="md:w-full shadow-md shadow-black " 
                src={playlist?.images[0]?.url} 
                alt="playlist cover" 
            />
        </div>

        {playlist?.name &&

        (<div
            className='h-10 px-1 flex justify-center items-center before:bg-white/10 border-white/20 border-1 overflow-hidden before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'
            
        >
            <p 
                className="text-tiny line-clamp-2 overflow-ellipsis text-white/90 lg:text-md font-medium uppercase text-center p-0 md:p-2"
            >
                {playlist?.name}
            </p>
        </div>)
        } 

      </Link>
  )
}

export default CardPlaylists
