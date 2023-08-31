import { Link, useParams } from "react-router-dom";
import CardPlaylists from "../components/CardPlaylists";
import ChooseGuess from "../components/ChooseGuess";
import ChooseSongs from "../components/ChooseSongs";
import { useChooseStore } from "../hooks/useChooseStore";
import { useGetPlaylistItems } from "../hooks/useGetPlaylistItems"

const ChooseMode = () => {
    
    const params = useParams()
    useGetPlaylistItems()
    const {playlistInfo} = useChooseStore()

      return (
        <>
        <div className="w-screen h-screen justify-start md:justify-between py-3 md:py-6 flex flex-col ">
        <div className="rounded-xl flex ml-4 w-max  border hover:bg-white hover:text-black hover:border cursor-pointer">
            <Link
                to="/play"
                className="font-medium md:text-lg text-center px-4 py-1 md:px-unit-xl"
            >
                Back
            </Link>
        </div>
        <div className="w-full flex flex-col items-center justify-around ">

            <div className="">
                <CardPlaylists
                    playlist={playlistInfo}
                />
            </div>
            
            <div className="items-center lg:flex-row lg:gap-14 flex flex-col">
                <div className="mt-5">
                <ChooseSongs/>
                </div>
                <div className="mt-5">
                <ChooseGuess/>
                </div>        
            </div>

            
        </div>
        <div className="w-full items-start flex justify-center  mt-10 ">
            <Link
                to={`/play/game/${params.id}`}
                className="w-3/5 font-medium md:text-2xl text-center rounded-xl py-4 px-20 md:px-unit-4xl hover:border cursor-pointer bg-indigo-600 hover:bg-indigo-700"
            >
                PLAY
            </Link>
        </div>
        </div>
        </>
    )}

export default ChooseMode
