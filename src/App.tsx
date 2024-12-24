import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Programming from "./pages/Programming";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/photography" element={<Photography/>} />
          <Route path="/programming" element={<Programming/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
