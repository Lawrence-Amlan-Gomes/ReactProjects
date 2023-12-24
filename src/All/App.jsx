import { Route, Routes, Navigate} from "react-router-dom";
import Header from "./Component/Header";
import "../All/Styles/global.css";
import Home from "./Component/Home";
import App1 from "../Project1/App";
import App2 from "../Project2/App";
import App3 from "../Project3/App";
import App4 from "../Project4/App";


function App() {
  return (
      <div className="Container">
        <div className="header">
          <Header/>
        </div>
        <div className="bodyPart">
          <Routes>
            <Route path="/" element={<Navigate to="/hello" />}/>
            <Route path="/hello" element={<Home />}/>
            <Route path="/project1" element={<App1 />}/>
            <Route path="/project2" element={<App2 />}/>
            <Route path="/project3" element={<App3 />}/>
            <Route path="/project4" element={<App4 />}/>
          </Routes>
        </div>
        <div className="footer">
        </div>
      </div>
  )
}

export default App
