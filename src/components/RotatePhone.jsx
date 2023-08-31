import {useState } from "react";
import {Spinner} from "@nextui-org/react";

const RotatePhone = () => {
    const [visible, setVisible] = useState(false)
    setTimeout(() => {
        setVisible(true)
    },1500)
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen rotate-90 uppercase ">
      {visible ? 
      <>
        <p className="font-bold text-xl">please rotate your device or expand your window</p>
        <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-36 rotate-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-36">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg> */}
        </div>
      </>
      :
      <Spinner/>
      }
      
    </div>
  )
}

export default RotatePhone
