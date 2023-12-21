import classes from "./project1.module.css";
import sun from "./images/sun.png";
import { useState } from "react";
import moon from "./images/moon.png";
export default function Project1(){
    const [theme, setTheme] = useState(false);
    const [themeName, setThemeName] = useState("Light");
    const [imageName, setImageName] = useState(`${moon}`);
    const [className, setClassname] = useState(`${classes.light}`)
    const [imageClassName, setImageClassname] = useState(`${classes.image2}`)
    function changeTheme(){
        if (theme){
            setTheme(false)
            setImageName(`${moon}`)
            setThemeName("Light")
            setClassname(`${classes.light}`)
            setImageClassname(`${classes.image2}`)
        }else{
            setTheme(true)
            setImageName(`${sun}`)
            setThemeName("Dark")
            setClassname(`${classes.dark}`)
            setImageClassname(`${classes.image1}`)
        }
    }

    return(
        <div className={className}>
            <div className={classes.item2}>
                <div className={classes.items}>
                    Theme
                </div>
                <div className={classes.items}>
                    {themeName}
                </div>
                <div className={classes.items} onClick={changeTheme}>
                    <img className={imageClassName} src={imageName} alt="sun"  onClick={changeTheme}/>
                </div>
            </div>
        </div>
    )

    
}