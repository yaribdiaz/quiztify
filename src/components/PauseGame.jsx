import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayingStore } from "../hooks/usePlayingStore";

const PauseGame = () => {
    const {handleSetPlayer, handleSetPause, playingState} = usePlayingStore()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const navigate = useNavigate()
    const handleExit = () => {
        navigate('/play')
    }

    useEffect(() => {
      if(playingState === 'song'){
        if(isOpen){
          handleSetPlayer(true)
          handleSetPause(true)
        } 
        if(!isOpen){
          handleSetPlayer(false)
          handleSetPause(false)
        }
      }

    },[isOpen])

    return (
        <>
          <Button className={`${playingState === "timeline" && 'pointer-events-none bg-gray-900'} ${playingState === "checkAnswer" && 'pointer-events-none bg-gray-900'} bg-green-600 hover:bg-green-800`} onPress={onOpen}>Pause</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-center">Pause</ModalHeader>
                  <ModalBody>
                    <Button color="primary" className="text-lg font-bold" onPress={onClose}>
                      Play
                    </Button>
                    <Button color="danger" className="text-lg font-bold" onPress={handleExit}>
                      Exit
                    </Button>
                  </ModalBody>
                  <ModalFooter>
                   
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
}

export default PauseGame
