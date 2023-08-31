import { useChooseStore } from "../hooks/useChooseStore";
import {Tabs, Tab} from "@nextui-org/react";

const ChooseSongs = () => {
    const {handleSetSongs, songs} = useChooseStore()

  return (
    <>
        <p className="text-center text-lg md:text-xl">
            Songs
        </p>
        <Tabs onSelectionChange={handleSetSongs} selectedKey={songs} variant='solid' aria-label="Tabs variants">
            <Tab key="10" title="10"/>
            <Tab key="20" title="20"/>
        </Tabs>
    </>
  )
}

export default ChooseSongs
