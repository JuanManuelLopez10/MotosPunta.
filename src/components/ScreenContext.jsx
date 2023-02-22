import { createContext, useState } from "react"

export const ScreenContext = createContext();

const ScreenContextProvider = ({children}) => {

    const [ScreenOrientation, setScreenOrientation] = useState(0)

    const getscreenorientation = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        let orientation
        if (width>height) {
            orientation="landscape"
        }else{
            orientation="portrait"
        }
        setScreenOrientation(orientation)
    }

    return(
        <ScreenContext.Provider value={{ScreenOrientation, getscreenorientation}}>
            {children}
        </ScreenContext.Provider>
        )
}
export default ScreenContextProvider;