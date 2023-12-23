import classes from "./Styles/project2.module.css";
import { useState, useEffect } from "react";
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

    const [winLine123, setWinLine123] = useState(false);
    const [winLine456, setWinLine456] = useState(false);
    const [winLine789, setWinLine789] = useState(false);
    const [winLine147, setWinLine147] = useState(false);
    const [winLine258, setWinLine258] = useState(false);
    const [winLine369, setWinLine369] = useState(false);
    const [winLine159, setWinLine159] = useState(false);
    const [winLine357, setWinLine357] = useState(false);

    const [prevValue, setPrevValue] = useState("o");
    const [result, setResult] = useState("Match Result");
    const [counter, setCounter] = useState(0);
    const [runTicTac, setRunTicTac] = useState(true);

    function changePrev() {
      incrementCount();
      setPrevValue((prevState)=>{
        if(prevState == "o"){
          return "x";
        }else{
          return "o";
        }
      })
      }
    function incrementCount() {
      setCounter((prevState)=>prevState+1);
    }

    function ticTac(num=0){
      if(runTicTac == true){
        switch (num) {
          case 1:
            if(box1 == ""){
              setBox1(prevValue)
              changePrev();
            }
            break;
          case 2:
            if(box2 == ""){
              setBox2(prevValue)
              changePrev();
            }
            break;
          case 3:
            if(box3 == ""){
              setBox3((prevState)=>prevState=prevValue);
              changePrev();
            }
            break;
          case 4:
            if(box4 == ""){
              setBox4(prevValue)
              changePrev();
            }
            break;
          case 5:
            if(box5 == ""){
              setBox5(prevValue)
              changePrev();
            }
            break;
          case 6:
            if(box6 == ""){
              setBox6(prevValue)
              changePrev();
            }
            break;
          case 7:
            if(box7 == ""){
              setBox7(prevValue)
              changePrev();
            }
            break;
          case 8:
            if(box8 == ""){
              setBox8(prevValue)
              changePrev();
            }
            break;
          case 9:
            if(box9 == ""){
              setBox9(prevValue)
              changePrev();
            }
        }
      }
    }

    useEffect(()=>{

      if (((box1 == box2)&&(box2 == box3))&&(box1 != "")){
        setResult(`Player ${box1} Won`);
        setRunTicTac(false);
        setWinLine123(true);
      }
      else if (((box4 == box5)&&(box5 == box6))&&(box4 != "")){
        setResult(`Player ${box4} Won`);
        setRunTicTac(false);
        setWinLine456(true);
      }
      else if (((box7 == box8)&&(box8 == box9))&&(box7 != "")){
        setResult(`Player ${box7} Won`);
        setRunTicTac(false);
        setWinLine789(true);
      }
      else if (((box1 == box4)&&(box4 == box7))&&(box1 != "")){
        setResult(`Player ${box1} Won`);
        setRunTicTac(false);
        setWinLine147(true);
      }
      else if (((box2 == box5)&&(box5 == box8))&&(box2 != "")){
        setResult(`Player ${box2} Won`);
        setRunTicTac(false);
        setWinLine258(true);
      }
      else if (((box3 == box6)&&(box6 == box9))&&(box9 != "")){
        setResult(`Player ${box9} Won`);
        setRunTicTac(false);
        setWinLine369(true);
      }
      else if (((box1 == box5)&&(box5 == box9))&&(box1 != "")){
        setResult(`Player ${box1} Won`);
        setRunTicTac(false);
        setWinLine159(true);
      }
      else if (((box3 == box5)&&(box5 == box7))&&(box3 != "")){
        setResult(`Player ${box3} Won`);
        setRunTicTac(false);
        setWinLine357(true);
      }
      else if(counter == 9){
        setResult("Tie");
      }

    },[box1, box2, box3, box4, box5, box6, box7, box8, box9])

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
      setResult("Match Result");
      setCounter(0);
      setPrevValue("o");
      setRunTicTac(true);
      setWinLine123(false);
      setWinLine456(false);
      setWinLine789(false);
      setWinLine147(false);
      setWinLine258(false);
      setWinLine369(false);
      setWinLine159(false);
      setWinLine357(false);
    }

    return(
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.subBox}>
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
                <div className={winLine123?`${classes.line123} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine456?`${classes.line456} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine789?`${classes.line789} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine147?`${classes.line147} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine258?`${classes.line258} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine369?`${classes.line369} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine159?`${classes.line159} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
                <div className={winLine357?`${classes.line357} ${classes.displayVid}`:`${classes.line123} ${classes.displayHid}`}></div>
              </div>
            </div>
            <div className={classes.result}>
            {result}
            </div>
            <div className={classes.restartBox}>
              <button className={classes.restart} onClick={restart}>
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}