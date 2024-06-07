import "./App.css";
import About  from "./Components/About";
import { Contacts } from "./Components/Contacts";
import Home from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CAngular from "./Pages/CAngular";
import Creact from "./Pages/Creact";
import DataScience from "./Pages/DataScience";
import FullStack from "./Pages/FullStack";
import CJava from "./Pages/CJava";
import Cai from "./Pages/Cai";
import Footer from "./Components/Footer";
import Chtml from "./Pages/Chtml";
import Ccss from "./Pages/Ccss";
import CjavaScript from "./Pages/CjavaScript";
import Cexpress from "./Pages/Cexpress";
import Anod from "./Pages/Anod";
import Python from "./Pages/Python";
import Mysql from "./Pages/Mysql";
import Circle from "./Components/Circle";
import CourseList from "./Components/CourseList";
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
          <Route path="/Circle" element={<Circle />} />
          <Route path="/CourseList" element={<CourseList />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Courses pages */}
          <Route path="/react" element={<Creact />} />
          <Route path="/angular" element={<CAngular />} />
          <Route path="/ds" element={<DataScience />} />
          <Route path="/fsd" element={<FullStack />} />
          <Route path="/java" element={<CJava />} />
          <Route path="/ai" element={<Cai />} />
          <Route path="/hml" element={<Chtml />} />
          <Route path="/css" element={<Ccss />} />
          <Route path="/js" element={<CjavaScript />} />
          <Route path="/express" element={<Cexpress />} />
          <Route path="/node" element={<Anod />} />
          <Route path="/python" element={<Python />} />
          <Route path="/mysql" element={<Mysql />} />
          <Route path="/Demo1" element={<Demo1 />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
