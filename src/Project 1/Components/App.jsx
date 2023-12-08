import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Quiz from "./Quiz";
import Result from "./Result";

function App() {
  return (
      <Layout>
        <Home/>
        <Signup/>
        <Login/>
        <Quiz/>
        <Result/>
      </Layout>
  )
}

export default App
