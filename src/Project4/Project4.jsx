import classes from "./Styles/project4.module.css";
import { useState } from "react";
import Section3 from "./Section3";

export default function Project4(){

  const [title, setTitle] = useState("");
  const [arr1, setArr1] = useState([]);
  const [count, setCount] = useState(0);

  const incrementCount = ()=>{
    setCount((prevState)=>prevState+1)
  }
  const decrementCount = ()=>{
    setCount((prevState)=>prevState-1)
  }

  const addSec = () => {
    if (title != ""){
      incrementCount();
      setArr1( arr => [...arr, title])
      setTitle("");
    }
  }
  return(
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.subBox}>
            <div className={classes.section1}>
               To Do List
            </div>
            <div className={classes.section2}>
              <div className={classes.innerSection2}>
                <input type="text" placeholder="Write Task" value={title} 
                  className={classes.inputBox} onChange={(e) => setTitle(e.target.value)}/>
               <button className={classes.AddButton} onClick={addSec}>Add Task</button>
              </div>
            </div>
            <div className={classes.section1}>
               {count} Tasks Left
            </div>
            <div className={classes.section3}>
              <Section3 arr1={arr1} decrementCount={decrementCount}/>
            </div>
          </div>
        </div>
      </div>
    )
}