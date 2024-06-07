import React from "react";
import "./CourseList.css";
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
import { Link } from "react-router-dom";

function CourseList() {
  return (
    <>
      <div className="List">
        <Link to="/react">
          <div className="courses">
            <div className="round">
              {" "}
              <FaReact />{" "}
            </div>
            <div className="name">React</div>
          </div>
        </Link>

        <Link to="/hml">
          <div className="courses">
            <div className="round">
              <FaHtml5 />
            </div>
            <div className="name">Html</div>
          </div>
        </Link>

        <Link to="/css">
          <div className="courses">
            <div className="round">
              <FaCss3Alt />
            </div>
            <div className="name">Css</div>
          </div>
        </Link>

        <Link to="/node">
          <div className="courses">
            <div className="round">
              <FaNodeJs />
            </div>
            <div className="name">Nodejs</div>
          </div>
        </Link>

        <Link to="/java">
          <div className="courses">
            <div className="round">
              <FaJava />
            </div>
            <div className="name">Java</div>
          </div>
        </Link>

        <Link to="/python">
          <div className="courses">
            <div className="round">
              <FaPython />
            </div>
            <div className="name">Python</div>
          </div>
        </Link>

        <Link to="/ds">
          <div className="courses">
            <div className="round">
              <SiDatabricks />
            </div>
            <div className="name">DataScience</div>
          </div>
        </Link>

        <Link to="/ai">
          <div className="courses">
            <div className="round">
              <GiArtificialHive />
            </div>
            <div className="name">AI</div>
          </div>
        </Link>

        <Link to="/mysql">
          <div className="courses">
            <div className="round">
              <DiMysql />
            </div>
            <div className="name">SQL</div>
          </div>
        </Link>

        <Link to="/express">
          <div className="courses">
            <div className="round">
              <SiMongodb />
            </div>
            <div className="name">Mongodb</div>
          </div>
        </Link>

        <Link to="/angular">
          <div className="courses">
            <div className="round">
              <FaAngular />
            </div>
            <div className="name">Angular</div>
          </div>
        </Link>

        <Link to="/fsd">
          <div className="courses">
            <div className="round">
              <FaLaptop />
            </div>
            <div className="name">MERN</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CourseList;
