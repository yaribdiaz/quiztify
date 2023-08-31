import  { useState, useEffect, useRef }  from "react";
import { usePlayingStore } from "../hooks/usePlayingStore";
import {Progress} from "@nextui-org/react";

export default function BarTime() {
    const [count, setCount] = useState(100); // el tiempo inicial en segundos
    //const [isRunning, setIsRunning] = useState(false); // el estado del contador
    const { 
      handleSetTimeline: setIsRunning, 
      timeline:isRunning,
      timelineCount,
    } = usePlayingStore()
    const intervalRef = useRef(null); // la referencia al intervalo
  

    useEffect(() => {
      if (isRunning) {
        // si el contador está corriendo, crear un intervalo que actualiza el tiempo cada segundo
        intervalRef.current = setInterval(() => {
          setCount((prevCount) => prevCount - 2);
        }, 100);
      } else {
        // si el contador está pausado o cancelado, limpiar el intervalo
        clearInterval(intervalRef.current);
      }
      // cuando el componente se desmonta, limpiar el intervalo
      return () => clearInterval(intervalRef.current);
    }, [isRunning]); // solo ejecutar este efecto cuando el estado del contador cambia
  
    useEffect(() => {
      if (count === 0) {
        // si el tiempo llega a cero, detener el contador
        setIsRunning(false);
        setCount(100)
      }
    }, [count]); // solo ejecutar este efecto cuando el tiempo cambia
  

    useEffect(() => {
      if(timelineCount === true) handleReset()
    },[timelineCount])

    const handleStart = () => {
      // iniciar o reanudar el contador
      setIsRunning(true);
    };
  
    const handlePause = () => {
      // pausar el contador
      setIsRunning(false);
    };

    const handleReset = () => {
      // reiniciar el contador al tiempo inicial y detenerlo
      setCount(100);
      setIsRunning(false);
    };
    
  
    return (
      <>
        <Progress
            size="sm"
            value={count}
            color={`${count <= 20 ? "danger" : "success"}`}
            className="w-full"
            label={' '}
            aria-label={' '}
        />
      </>
    );
  }
