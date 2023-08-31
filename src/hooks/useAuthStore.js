import { useSelector, useDispatch } from "react-redux";
import { auth } from "../redux/auth/authSlice";
import {
    setAuthenticated,
    setSpotifyRefreshToken,
    setSpotifyToken
} from "../redux/auth/authSlice"

export  const useAuthStore = () => {
const dispatch = useDispatch()
const {
    isAuthenticated,
    spotifyRefreshToken,
    spotifyToken
} = useSelector(auth)

const handleSetAuthenticated = (boolean) => {
    dispatch(setAuthenticated(boolean))
}

const handleSetSpotifyRefreshToken= (refreshToken) => {
    dispatch(setSpotifyRefreshToken(refreshToken))
}

const handleSetSpotifyToken = (token) => {
    dispatch(setSpotifyToken(token))
}

return {
    /* Functions */
    handleSetAuthenticated,
    handleSetSpotifyRefreshToken,
    handleSetSpotifyToken,
    /* States */
    isAuthenticated,
    spotifyRefreshToken,
    spotifyToken
}}