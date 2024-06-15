import "./App.css";
import About from "./Components/About";
import { Contacts } from "./Components/Contacts";
import Home from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./Components/Footer";
import Demo1 from "./Components/Demo1";
import JavaFullStack from "./pages/JavaFullStack";
import PythonfullStack from "./pages/PythonfullStack";
import DataScience from "./pages/DataScience";
import ArtificialIntelligance from "./pages/ArtificialIntelligance";
import MachineLearning from "./pages/MachineLearning";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Courses pages */}
          <Route path="/Demo1" element={<Demo1 />} />
          <Route path="/jfsd" element={<JavaFullStack/>}/>
          <Route path="/python" element={<PythonfullStack/>}/>
          <Route path="/ds" element={<DataScience/>}/>
          <Route path="/ai" element={<ArtificialIntelligance/>}/>
          <Route path="/ml" element={<MachineLearning/>}/>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
