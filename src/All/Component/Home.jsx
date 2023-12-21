import homeitem from "../Styles/homepage.module.css";
export default function Home() {
  let height = window.innerHeight;
  height = height*0.6
    return (
      <div className={homeitem.mainBox} style={height={height}}>
        <div className={homeitem.homeItem}>Welcome to My React JS Projects</div>
      </div>
    );
  }