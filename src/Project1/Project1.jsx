import classes from "./project1.module.css";
import sun from "./images/sun.png";
import { useState } from "react";
import moon from "./images/moon.png";
export default function Project1(){
    const [theme, setTheme] = useState(false);
    function changeTheme(mode){
        setTheme(mode)
    }
    if (theme) {
        return(
            <div className={classes.dark}>
                <div className={classes.item2}>
                    <div className={classes.items}>
                        Project 1
                    </div>
                    <div className={classes.items}>
                        Dark
                    </div>
                    <div className={classes.items} onClick={()=>changeTheme(false)}>
                        <img className={classes.image1} src={sun} alt="sun"  onClick={()=>changeTheme(false)}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={classes.box}>
                <div className={classes.item2}>
                    <div className={classes.items}>
                        Project 1
                    </div>
                    <div className={classes.items}>
                        Light
                    </div>
                    <div className={classes.items} onClick={()=>changeTheme(true)}>
                        <img className={classes.image2} src={moon} alt="sun" onClick={()=>changeTheme(true)}/>
                    </div>
                </div>
            </div>
        )
    }
    
}