import homeitem from "../Styles/homepage.module.css";
export default function Home() {
    return (
      <div className={homeitem.mainBox}>
        <div className={homeitem.homeItem}>Welcome to My React JS Projects</div>
      </div>
    );
  }