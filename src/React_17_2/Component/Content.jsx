import Hover from "./Hover"
import Theme from "./Theme"
import { useContext } from "react";
export default function Content(){
    const context = useContext(Theme)
    const {theme, switchTheme} = context;
    return(
        <div>
            <h1>This is Content</h1>
            <Hover theme={theme} switchTheme={switchTheme}/> 
        </div>
        )  
}
