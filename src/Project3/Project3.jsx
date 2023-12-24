import classes from "./Styles/project3.module.css";
import { useState, useEffect, useRef } from "react";

export default function Project3(){
  const interval1 = useRef(null);
  const interval2 = useRef(null);
  const [h1, seth1] = useState(0);
  const [h2, seth2] = useState(0);
  const [m1, setm1] = useState(0);
  const [m2, setm2] = useState(0);
  const [s1, sets1] = useState(0);
  const [s2, sets2] = useState(0);
  const [ms1, setms1] = useState(0);
  const [ms2, setms2] = useState(0);
  const [pausePlay, setPausePlay] = useState("Pause");
  const [restart, setRestart] = useState("Start");

  const tickms = ()=>{
    setms2((prevState)=>{
      if(prevState == 9){
        setms1((prevState)=>{
          if(prevState == 9){
            return 0 ;
          }else{
            return prevState+1 ;
          }
        });
        return 0 ;
      }else{
        return prevState+1 ;
      }
    });
  }

  const ticks = ()=>{
    sets2((prevStates2)=>{
      if(prevStates2 == 9){
        sets1((prevStates1)=>{
          if(prevStates1 == 5){
            setm2((prevStatem2)=>{
              if(prevStatem2 == 9){
                setm1((prevStatem1)=>{
                  if(prevStatem1 == 5){
                    seth2((prevStateh2)=>{
                      if(prevStateh2 == 3){
                        seth1((prevStateh1)=>{
                          if(prevStateh1 == 2){
                            setm1(0);
                            setm2(0);
                            sets1(0);
                            sets2(0);
                            seth2(0);
                            return 0 ;
                          }
                        })
                      }else if(prevStateh2 == 9){
                        seth1((prevStateh1)=>prevStateh1+1)
                        return prevStateh2 = 0;
                      }
                      else{
                        return prevStateh2+1 ;
                      }
                    });
                    return 0 ;
                  }else{
                    return prevStatem1+1 ;
                  }
                });
                return 0 ;
              }else{
                return prevStatem2+1 ;
              }
            });
            return 0 ;
          }else{
            return prevStates1+1 ;
          }
        });
        return 0 ;
      }else{
        return prevStates2+1 ;
      }
    });
  }

  const pausePlayFunc = ()=>{
    if ((pausePlay == "Pause")&&(restart != "Start")) {
      setPausePlay("Play");
      clearInterval(interval1.current);
      clearInterval(interval2.current);
    }else{
      setPausePlay("Pause");
      interval1.current = setInterval(tickms,10);
      interval2.current = setInterval(ticks,1000);
    }
  }

  const restartFunc = ()=>{
    if (restart == "Start") {
      setRestart("Stop");
      interval1.current = setInterval(tickms,10);
      interval2.current = setInterval(ticks,1000);
    }else{
      setRestart("Start");
      setPausePlay("Pause");
      clearInterval(interval1.current);
      clearInterval(interval2.current);
      seth1(0);
      seth2(0);
      setm1(0);
      setm2(0);
      setms1(0);
      setms2(0);
      sets1(0);
      sets2(0);
    }
  }

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