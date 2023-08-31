import RotatePhone from "./RotatePhone";
import Media from "./Media";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../hooks/useAuthStore";

const MediaQuery = () => {
  const {isAuthenticated} = useAuthStore()
  const navigate = useNavigate()
  useEffect(()=> {
    if(!isAuthenticated) navigate('/')
  },[])

    return (
        <div>          
          {/* <Media
            query="(orientation: landscape) and (min-width: 600px)"
            render={() => <Outlet/>}
            elseRender={() => <RotatePhone/>}
          /> */}
          <Outlet/>
        </div>
      );
}

export default MediaQuery
