import { useEffect } from "react"
import ListPlaylists from "../components/ListPlaylists"
import SearchBar from "../components/SearchBar"
//import {useAuthStore} from "../hooks/useAuthStore"
import {useGetAuth} from "../hooks/useGetAuth"
import { useGetPlaylists } from "../hooks/useGetPlaylists"
import { useChooseStore } from "../hooks/useChooseStore"
import { usePlayingStore } from "../hooks/usePlayingStore"

const Home = () => {
  // const {token} = useAuthStore()
  const {playlists} =useGetPlaylists()
  const {handleSetPlaylistItems} = usePlayingStore()
  const {handleSetChooseInitialState} = useChooseStore()
  useGetAuth()

  useEffect(() => {
    handleSetChooseInitialState()
    handleSetPlaylistItems([])
  },[])
  
  return (
    <div className="">
        <div className="bg-black h-8 px-5">
          <p className="font-black font-kelly text-center shadow-md text-2xl  text-yellow-400">QUIZTIFY</p>
        </div>
        <div className="sticky top-0 z-20">
          <SearchBar/>
        </div>
        <div className="h-full">
            <ListPlaylists
            playlists={playlists.playlists?.items}
            />
        </div>
    </div>

  )
}

export default Home
