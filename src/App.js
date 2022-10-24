import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Userdetail from "./Userdetail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Userdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;