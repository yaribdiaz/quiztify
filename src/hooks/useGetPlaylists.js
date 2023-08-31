import { useEffect, useState } from "react";
import { useAuthStore } from "./useAuthStore";
import { useChooseStore } from "../hooks/useChooseStore"
import axios from "axios";

export const useGetPlaylists = () => {
    const{search} = useChooseStore()
    const {spotifyToken, spotifyRefreshToken:refresh_token, handleSetSpotifyToken} = useAuthStore()
    const [playlists, setPlaylists] = useState([])

    const getPlaylists = async () => {
        const api = axios.create({
            baseURL: 'https://api.spotify.com/v1',
            headers: {
              Authorization: `Bearer ${spotifyToken}`,
            },
          });
            // const client_id= import.meta.env.VITE_CLIENT_ID
            // const client_secret= import.meta.env.VITE_CLIENT_SECRET
              // Definir una función que solicite un nuevo token usando el refresh token
              const getNewToken = async () => {
                // Codifica el client_id y el client_secret en base64
                const client_id= import.meta.env.VITE_CLIENT_ID
                const client_secret= import.meta.env.VITE_CLIENT_SECRET
                 // Crear una instancia de Axios con la URL y los headers necesarios
                const instance = axios.create({
                  baseURL: 'https://accounts.spotify.com/api',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(
                      client_id +
                        ':' +
                        client_secret
                    )}`,
                  },
                });

                // Crear los datos del cuerpo de la petición
                const data = new URLSearchParams();
                data.append('grant_type', 'refresh_token');
                data.append('refresh_token', refresh_token);

                // Hacer la petición y devolver el nuevo token
                try {
                  const response = await instance.post('/token', data);
                  return response.data.access_token;
                } catch (error) {
                  console.error(error);
                  return null;
                }
              };
              
              // Crear un interceptor de respuesta para renovar el token si no es válido
              api.interceptors.response.use(
                response => {
                  // Si la respuesta tiene éxito, devolverla sin modificar
                  return response;
                },
                error => {
                  // Si la respuesta tiene un error, comprobar si es un error de autorización (401)
                  if (error.response && error.response.status === 401) {
                    // Comprobar si la solicitud original ya ha intentado renovar el token
                    if (error.config._retry) {
                      // Si ya ha intentado renovar el token, devolver el error
                      return Promise.reject(error);
                    } else {
                      // Si no ha intentado renovar el token, marcar la solicitud original con una bandera _retry
                      error.config._retry = true;
                      // Llamar a la función getNewToken para solicitar un nuevo token
                      return getNewToken()
                        .then(newToken => {
                          handleSetSpotifyToken(newToken)
                          // Si se obtiene un nuevo token, actualizar el encabezado de autorización de la solicitud original con el nuevo token
                          error.config.headers['Authorization'] = `Bearer ${newToken}`;
                          // Reintentar la solicitud original con el nuevo token y devolver una promesa
                          return api.request(error.config);
                        })
                        .catch(error => {
                          // Si no se obtiene un nuevo token, devolver el error
                          return Promise.reject(error);
                        });
                    }
                  } else {
                    // Si la respuesta tiene otro tipo de error, devolverlo sin modificar
                    return Promise.reject(error);
                  }
                }
              );

                        // Hacemos la petición GET al endpoint de featured playlists
          api.get('/browse/featured-playlists', {
            // Pasamos algunos parámetros opcionales
            params: {
              country: 'MX', // Código del país
              limit: 30, // Número máximo de playlists a devolver
              
            },
          })
          .then((res) => {
            setPlaylists(res.data)
          })
    }

    const getPlaylistsSearch = async () => {

        const playlistSearch = axios.create({
          baseURL: 'https://api.spotify.com/v1',
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          }
        });

        const getNewToken = async () => {
          // Codifica el client_id y el client_secret en base64
          const client_id= import.meta.env.VITE_CLIENT_ID
          const client_secret= import.meta.env.VITE_CLIENT_SECRET
           // Crear una instancia de Axios con la URL y los headers necesarios
          const instance = axios.create({
            baseURL: 'https://accounts.spotify.com/api',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(
                client_id +
                  ':' +
                  client_secret
              )}`,
            },
          });

          // Crear los datos del cuerpo de la petición
          const data = new URLSearchParams();
          data.append('grant_type', 'refresh_token');
          data.append('refresh_token', refresh_token);

          // Hacer la petición y devolver el nuevo token
          try {
            const response = await instance.post('/token', data);
            return response.data.access_token;
          } catch (error) {
            console.error(error);
            return null;
          }
        };
        
        // Crear un interceptor de respuesta para renovar el token si no es válido
        playlistSearch.interceptors.response.use(
          response => {
            return response;
          },
          error => {
            if (error.response && error.response.status === 401) {
              // Comprobar si la solicitud original ya ha intentado renovar el token
              if (error.config._retry) {
                // Si ya ha intentado renovar el token, devolver el error
                return Promise.reject(error);
              } else {
                // Si no ha intentado renovar el token, marcar la solicitud original con una bandera _retry
                error.config._retry = true;
                // Llamar a la función getNewToken para solicitar un nuevo token
                return getNewToken()
                  .then(newToken => {
                    handleSetSpotifyToken(newToken)
                    // Si se obtiene un nuevo token, actualizar el encabezado de autorización de la solicitud original con el nuevo token
                    error.config.headers['Authorization'] = `Bearer ${newToken}`;
                    // Reintentar la solicitud original con el nuevo token y devolver una promesa
                    return playlistSearch.request(error.config);
                  })
                  .catch(error => {
                    // Si no se obtiene un nuevo token, devolver el error
                    return Promise.reject(error);
                  });
              }
            } else {
              // Si la respuesta tiene otro tipo de error, devolverlo sin modificar
              return Promise.reject(error);
            }
          }
        );
    
        // Hacemos la petición GET al endpoint de featured playlists
        playlistSearch.get('/search', {
            // Pasamos algunos parámetros opcionales
            params: {
                q:search,
                type:'playlist',
                limit:50
            },
          })
          .then((res) => {
            setPlaylists(res.data)
          })







        
    }

    
    
    useEffect(() => {
        if(search){
            getPlaylistsSearch()
        }
        else{
            getPlaylists()
        }
    },[search])

    return {
        playlists,
        search,
        getPlaylists,
        getPlaylistsSearch
    }
}