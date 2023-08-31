import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutSign from "./layouts/LayoutSign"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ChooseMode from "./pages/ChooseMode"
import MediaQuery from "./components/MediaQuery"
import Playing from "./components/Playing"
import EndGame from "./components/EndGame"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutSign/>}>
            <Route index element={<Login/>}/>
          </Route>
          <Route path="/play" element={<MediaQuery/>}>
            <Route index element={<Home/>}/>
            <Route path=":id" element={<ChooseMode/>}/>
            <Route path="game/:id" element={<Playing/>}/>
            <Route path="endgame" element={<EndGame/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
