import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Firstmodel from "./Components/Homepage/Firstmodel/Firstmodel";
import Home from "./Components/Homepage/Home/Home";
import Notfound from "./Components/Homepage/Notfound/Notfound";
import Secondmodel from "./Components/Homepage/Secondmodel/Secondmodel";
import img1 from "./Images/img-5.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="firstmodel">
            <img src={img1} alt="image1" style={{ width: "50px" }} />
          </Link>
          <Link to="secondmodel">Second model</Link>

          <Link to="*">Notfound</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="firstmodel" element={<Firstmodel />} />
            <Route path="secondmodel" element={<Secondmodel />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Firstmodel></Firstmodel> */}
    </div>
  );
}

export default App;
