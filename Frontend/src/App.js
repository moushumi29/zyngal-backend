import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Home2 from "./component/Home2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </div>
  );
}

export default App;
