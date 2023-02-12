import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Firstmodel from "./Components/Homepage/Firstmodel/Firstmodel";
import Home from "./Components/Homepage/Home/Home";
import Secondmodel from "./Components/Homepage/Secondmodel/Secondmodel";
import Thirdmodel from "./Components/Homepage/Thirdmodel/Thirdmodel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="firstmodel" element={<Firstmodel />} />
            <Route path="secondmodel" element={<Secondmodel />} />
            <Route path="thirdmodel" element={<Thirdmodel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
