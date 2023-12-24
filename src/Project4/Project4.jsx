import classes from "./Styles/project4.module.css";

export default function Project4(){



  useEffect(()=>{
    return ()=>{//went componentWillUnmount then it will return // it is a cleanUp
      clearInterval(interval1.current);
      clearInterval(interval2.current);
    }
  },[])

    return(
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.subBox}>
            <div className={classes.section1}>
              Stop Watch
            </div>
            <div className={classes.section2}>
              {h1}{h2}:{m1}{m2}:{s1}{s2}:{ms1}{ms2}
            </div>
            <div className={classes.section3}>
              <button className={restart=="Start"?`${classes.pause} ${classes.displayHid}`:`${classes.pause} ${classes.displayVis}`} onClick={()=>pausePlayFunc()}>{pausePlay}</button>
            </div>
            <div className={classes.section4}>
              <button className={classes.restart} onClick={()=>restartFunc()}>{restart}</button>
            </div>
          </div>
        </div>
      </div>
    )
}