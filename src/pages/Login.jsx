import { useGetAuth } from "../hooks/useGetAuth"

const Login = () => {

  const {handleLogin} = useGetAuth()

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="bg-green-500 px-10 py-2 font-medium text-2xl"
      >
        Login with Spotify
      </button>
    </div>
  )
}

export default Login
