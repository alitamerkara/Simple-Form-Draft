import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portal from "./components/Portal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </>
  );
}

export default App;
