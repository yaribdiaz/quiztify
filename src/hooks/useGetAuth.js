import { useCallback, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import apiCall from "../api"
import { useAuthStore } from "./useAuthStore"

export const useGetAuth = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const {
        handleSetSpotifyToken,
        handleSetSpotifyRefreshToken,
        refresh_token,
        handleSetAuthenticated
    } = useAuthStore()



    const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&scope=user-read-private`
    const commonParams = {
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,    
    }

    
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        const spotifyCode = urlParams.get("code")
        if(spotifyCode) authenticateUser(spotifyCode)
    },[location.search])


    const handleLogin = () => {
        window.location.replace(spotifyUrl)
    }

    const spotifyAuthCall = async (requiredParams) => {
        console.log(requiredParams)
        try {
            const params = {
                ...requiredParams,
                grant_type:"authorization_code",
                ...commonParams
            }

            const searchParams = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join("&")

            const spotifyCall = await apiCall({
                method:"POST",
                url: "https://accounts.spotify.com/api/token",
                body: searchParams,
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            })

            return await spotifyCall.json()
        } catch (error) {
            console.log(error)
        } 
    }

    const authenticateUser = useCallback( async (code) => {
        try {
        let response
        if(refresh_token)
            response = await spotifyAuthCall({ resfresh_token: refresh_token})
        else
            response = await  spotifyAuthCall({ code })
            console.log(response)
            handleSetAuthenticated(true)
            handleSetSpotifyToken(response?.access_token)
            handleSetSpotifyRefreshToken(response?.refresh_token)
            
            //redirigir a la aplicación
            navigate('/play')
        } catch (error) {
            console.log(error)
        }
    }, [handleSetSpotifyRefreshToken, handleSetSpotifyToken,handleSetAuthenticated, refresh_token])


    return{
        handleLogin
    }
    }