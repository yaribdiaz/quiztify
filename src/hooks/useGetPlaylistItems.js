import { useChooseStore } from "./useChooseStore";
import { useAuthStore } from "./useAuthStore";
import { usePlayingStore } from "./usePlayingStore";
import axios from "axios";
import { useEffect} from "react";

export const useGetPlaylistItems = () => {
    const {
      handleSetPlaylistItems, 
      playlistItems, 
      handleSetSongsToGuess, 
      handleSetPlayingState,
      handleSetPlayerSongEnd,
      handleSetPlayingSong,
      handleSetTimeline,
      handleSetPointsPlayer1,
      handleSetPointsPlayer2,
      handleSetTimelineCount,
      handleSetPause
    } = usePlayingStore()
    const {playlistInfo, songs:songsAmount} = useChooseStore()
    const {spotifyToken} = useAuthStore()
    const {id:playlistId} = playlistInfo


    useEffect(() => {
      handleSetPlaylistItems([])
      getItems()
      handleSetPlayerSongEnd(false)
      handleSetTimeline(false)
      handleSetPlayingState('currentSong')
      handleSetPlayingSong(0)
      handleSetTimelineCount(false)
      handleSetPointsPlayer1(0)
      handleSetPointsPlayer2(0)
      handleSetPause(false)
    },[]) 
    
    useEffect(() => {
      if(playlistItems <= 0) return 
      getRandomSongs(playlistItems, songsAmount)
    },[songsAmount])

    const getItems = async () => {
        try {
            // La configuración del header con el token de acceso
            const config = {
              headers: { Authorization: `Bearer ${spotifyToken}` },
            };
    
            // La petición GET al endpoint de obtener una playlist
            const response = await axios.get(
              `https://api.spotify.com/v1/playlists/${playlistId}`,
              config
            );
    
            // La extracción del array de canciones desde la respuesta
            const songs = response.data.tracks.items;

            
              const songPreviews = songs.filter(song => song.track.preview_url)
              handleSetPlaylistItems(songPreviews)
              getRandomSongs(songPreviews,songsAmount)
            
          } catch (error) {
            // El manejo del error en caso de que ocurra
            console.error(error);
          }
    }

    const getRandomSongs = (items, numberSongs) => {
      let numeros = [];
      // Insertar 10 números aleatorios sin repetir usando un bucle for
      for (let i = 0; i < numberSongs; i++) {
      // Generar un número entero aleatorio entre 0 y cantidad de playlist
      let numero = Math.floor(Math.random() * (items.length));
      // Verificar si el número ya está en el arreglo
      if (numeros.includes(numero)) {
          // Si el número ya está, restar uno a i para repetir el ciclo
          i--;
      } else {
          // Si el número no está, agregarlo al arreglo
          numeros.push(numero);
      }
      }
      handleSetSongsToGuess(numeros)
    }

    



    // return{

    // }
}