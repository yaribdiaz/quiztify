import { useChooseStore } from "../hooks/useChooseStore";
import {Tabs, Tab} from "@nextui-org/react";

const ChoosePlayers = () => {

    const {handleSetPlayers, players} = useChooseStore()

  return (
    <>
        <p className="mb-3 text-center text-lg md:text-xl">
                        Select Players
        </p>
        <Tabs onSelectionChange={handleSetPlayers} selectedKey={players} variant='solid' aria-label="Tabs variants">
            {/* <Tab key={1} title="1 Player"/> */}
            <Tab key={2} title="2 Players"/>
        </Tabs>
    </>
  )
}

export default ChoosePlayers
