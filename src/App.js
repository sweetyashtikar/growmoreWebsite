import "./App.css";
import About from "./Components/About";
import { Contacts } from "./Components/Contacts";
import Home from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./Components/Footer";
import Demo1 from "./Components/Demo1";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
