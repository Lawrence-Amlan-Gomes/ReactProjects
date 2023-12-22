import classes from "./Styles/project2.module.css";
import { useState } from "react";
export default function Project2(){
    const [box1, setBox1] = useState("");
    const [box2, setBox2] = useState("");
    const [box3, setBox3] = useState("");
    const [box4, setBox4] = useState("");
    const [box5, setBox5] = useState("");
    const [box6, setBox6] = useState("");
    const [box7, setBox7] = useState("");
    const [box8, setBox8] = useState("");
    const [box9, setBox9] = useState("");
    const [prevValue, setPrevValue] = useState("O");
    const [result, setResult] = useState("Match Result");
    const [counter, setCounter] = useState(0);

    function changePrev() {
      if (prevValue == "O"){
        setPrevValue("X")
      }else{
        setPrevValue("O")
      }
    }

    function resultFunc() {
      if(counter >= 8){
        setResult("Tie")
      }
    }

    function incrementCount() {
      setCounter((prevState)=>prevState+1)
    }

    function ticTac(num){
      switch (num) {
        case 1:
          if(box1 == ""){
            setBox1(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 2:
          if(box2 == ""){
            setBox2(prevValue)
            incrementCount();
            changePrev();
            resultFunc();
          }
          break;
        case 3:
          if(box3 == ""){
            setBox3(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 4:
          if(box4 == ""){
            setBox4(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 5:
          if(box5 == ""){
            setBox5(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 6:
          if(box6 == ""){
            setBox6(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 7:
          if(box7 == ""){
            setBox7(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 8:
          if(box8 == ""){
            setBox8(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
          break;
        case 9:
          if(box9 == ""){
            setBox9(prevValue)
            changePrev();
            incrementCount();
            resultFunc();
          }
      }
    }


    function restart() {
      setBox1("");
      setBox2("");
      setBox3("");
      setBox4("");
      setBox5("");
      setBox6("");
      setBox7("");
      setBox8("");
      setBox9("");
      setResult("Match Result")
      setCounter(0)
    }

    return(
        <div className={classes.box}>
          <div className={classes.section1}>
            Tic Tac Toe
          </div>
          <div className={classes.section2}>
            <div className={classes.playBox}>
              <div className={`${classes.boxes}`} onClick={()=>ticTac(1)}>
                {box1}</div>
              <div className={`${classes.boxes} ${classes.middleBoxes2}`} onClick={()=>ticTac(2)}>
                {box2}</div>
              <div className={`${classes.boxes}`} onClick={()=>ticTac(3)}>
                {box3}</div>
              <div className={`${classes.boxes} ${classes.middleBoxes}`} onClick={()=>ticTac(4)}>
                {box4}</div>
              <div className={`${classes.boxes} ${classes.middleBoxes} ${classes.middleBoxes2}`} onClick={()=>ticTac(5)}>
                {box5}</div>
              <div className={`${classes.boxes} ${classes.middleBoxes}`} onClick={()=>ticTac(6)}>
                {box6}</div>
              <div className={`${classes.boxes}`} onClick={()=>ticTac(7)}>
                {box7}</div>
              <div className={`${classes.boxes} ${classes.middleBoxes2}`} onClick={()=>ticTac(8)}>
                {box8}</div>
              <div className={`${classes.boxes}`} onClick={()=>ticTac(9)}>
                {box9}</div>
            </div>
          </div>
          <div className={classes.result}>
          {result}
          </div>
          <button className={classes.restart} onClick={restart}>
            Restart
          </button>
        </div>
    )
}