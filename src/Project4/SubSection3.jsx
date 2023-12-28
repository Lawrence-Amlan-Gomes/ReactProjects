import classes from "./Styles/project4.module.css";
import { useState } from "react";

export default function SubSection3({arr1i, decrementCount}){
    const [show, setShow] = useState(true);
        return(  
            <div className={show?classes.addedTasks:classes.displayNone}>
                <li className={classes.taskNum}></li>
                <div className={classes.taskBody}>{arr1i}</div>
                <button className={classes.deleteButton} onClick={()=>{
                    setShow(false);
                    decrementCount();
                    }}>X</button>
            </div>        
    )
}