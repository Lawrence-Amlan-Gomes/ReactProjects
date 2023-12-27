import classes from "./Styles/project4.module.css";

export default function Project4(){
    return(
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.subBox}>
            <div className={classes.section1}>
               To Do List
            </div>
            <div className={classes.section2}>
              <div className={classes.innerSection2}>
                <input type="text" placeholder="Write Task" className={classes.inputBox}/>
               <button className={classes.AddButton}>Add Task</button>
              </div>
            </div>
            <div className={classes.section3}>
              <div className={classes.addedTasks}>
                <div className={classes.taskNum}>1</div>
                <div className={classes.taskBody}>Go to GYM </div>
                <button className={classes.deleteButton}>X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}