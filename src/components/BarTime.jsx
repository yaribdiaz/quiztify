import  { useState, useEffect, useRef }  from "react";
import { usePlayingStore } from "../hooks/usePlayingStore";
import {Progress} from "@nextui-org/react";

export default function BarTime() {
    const [count, setCount] = useState(100); 
    const { 
      handleSetTimeline: setIsRunning, 
      timeline:isRunning,
      timelineCount,
    } = usePlayingStore()
    const intervalRef = useRef(null); 
  

    useEffect(() => {
      if (isRunning) {
        intervalRef.current = setInterval(() => {
          setCount((prevCount) => prevCount - 2);
        }, 100);
      } else {
        clearInterval(intervalRef.current);
      }
      return () => clearInterval(intervalRef.current);
    }, [isRunning]);
  
    useEffect(() => {
      if (count === 0) {
        setIsRunning(false);
        setCount(100)
      }
    }, [count]);
  

    useEffect(() => {
      if(timelineCount === true) handleReset()
    },[timelineCount])

    const handleReset = () => {
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
