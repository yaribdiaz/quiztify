import { useChooseStore } from "../hooks/useChooseStore";
import {Tabs, Tab} from "@nextui-org/react";


const ChooseGuess = () => {
    const {handleSetGuess, guess} = useChooseStore()
  return (
    <>
        <p className="text-center text-lg md:text-xl">
            Guess
        </p>
        <Tabs onSelectionChange={handleSetGuess} selectedKey={guess} variant='solid' aria-label="Tabs variants">
            <Tab key="song" title="Song"/>
            <Tab key="artist" title="Artist"/>
        </Tabs>
    </>
  )
}

export default ChooseGuess
