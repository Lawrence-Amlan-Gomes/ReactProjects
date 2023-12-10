import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Quiz from "./Quiz";
import Result from "./Result";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/result" element={<Result/>}/>
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
