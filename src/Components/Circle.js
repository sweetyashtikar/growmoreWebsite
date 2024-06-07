import React, { useEffect } from "react";
import "../Styles/Circle.css";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAngular,
} from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";

import { SiDatabricks, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { GiArtificialHive } from "react-icons/gi";
const Circle = () => {
  useEffect(() => {
    const courses = document.querySelectorAll(".growcourse");

    const radius = 200;
    const totalCourses = courses.length;
    const angleIncrement = (2 * Math.PI) / totalCourses;

    courses.forEach((course, index) => {
      const angle = index * angleIncrement;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      course.style.left = `${radius + x - course.offsetWidth / 2}px`;
      course.style.top = `${radius + y - course.offsetHeight / 2}px`;
    });
  }, []);

  return (
    <>
      <div className="maincontainer">
        <div className="filelist">
          <CourseList />
        </div>
        <div className="circle" id="circle">
          <div className="growcourse">
            <Link to="/react">
              <i>
                <FaReact />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/hml">
              <i>
                <FaHtml5 />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/css">
              <i>
                <FaCss3Alt />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/node">
              <i>
                <FaNodeJs />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/java">
              <i>
                <FaJava />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/ds">
              <i>
                <SiDatabricks />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/ai">
              <i>
                <GiArtificialHive />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            {" "}
            <Link to="/mysql">
              <i>
                <DiMysql />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/express">
              <i>
                <SiMongodb />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/angular">
              <i>
                <FaAngular />
              </i>
            </Link>
          </div>
          <div className="growcourse">
            <Link to="/fsd">
              <i>
                <FaLaptop />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
