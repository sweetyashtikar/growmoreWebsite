import React from "react";
import "../Styles/anode.css";
const FullStack = () => {
  return (
    <div className="node-container">
      <h1 className="node-heading"> MERN Stack Syllbus</h1>

      {/* Module Cards */}
      <div className="course-container3">
        {/* Module 1 */}
        <div className="course-card3">
          <div className="card-title">
            Module 1: of Full stack developer course syllabus: HTML{" "}
          </div>
          <div className="card-content">
            <ul>
              <li>Introduction to HTML</li>
              <li>Browsers and HTML</li>
              <li>Editor’s Offline and Online</li>
              <li>Tags, Attribute and Elements</li>
              <li>Doctype Element</li>
              <li>Comments</li>
              <li>Headings, Paragraphs, and Formatting Text</li>
              <li>Lists and Links</li>
              <li>Images and Tables</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">
            Module 2: of Full stack developer course syllabus: CSS
          </div>
          <div className="card-content">
            <ul>
              <li>Introduction CSS</li>
              <li>Applying CSS to HTML</li>
              <li>Selectors, Properties and Values</li>
              <li>CSS Colors and Backgrounds</li>
              <li>CSS Box Model</li>
              <li>CSS Margins, Padding, and Borders</li>
              <li>CSS Text and Font Properties</li>
              <li>CSS General Topics</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="course-card3">
          <div className="card-title">
            Module 3: of Full stack developer course syllabus: JavaScript
          </div>
          <div className="card-content">
            <ul>
              <li>Introduction to JavaScript</li>
              <li>Applying JavaScript (internal and external)</li>
              <li>Understanding JS Syntax</li>
              <li>Introduction to Document and Window Object</li>
              <li>Variables and Operators</li>
              <li>Data Types and Num Type Conversion</li>
              <li>Math and String Manipulation</li>
              <li>Objects and Arrays</li>
              <li>Functions</li>
              <li>Date and Time</li>
              <li>Looping in JS</li>
              <li>Switch Case</li>
              <li>Conditional Statements</li>
            </ul>
          </div>
        </div>
        {/* Module 4 */}
        <div className="course-card3">
          <div className="card-title">
            Module 4: of Full stack developer course syllabus: ReactJS
          </div>
          <div className="card-content">
            <ul>
              <li>Introduction</li>
              <li>Templating using JSX</li>
              <li>Components, State and Props</li>
              <li>Lifecycle of Components</li>
              <li>Rendering List and Portals</li>
              <li>Error Handling</li>
              <li>Routers</li>
              <li>Redux and Redux Saga</li>
              <li>Immutable.js</li>
              <li>Service Side Rendering</li>
              <li>Webpack</li>
              <li>Unit Testing</li>
            </ul>
          </div>
        </div>
        {/* Module 5 */}
        <div className="course-card3">
          <div className="card-title">
            Module 5: of Full stack developer course syllabus: NodeJS
          </div>
          <div className="card-content">
            <ul>
              <li>Node js Overview</li>
              <li>Node js - Basics and Setup</li>
              <li>Node js Console</li>
              <li>Node js Command Utilities</li>
              <li>Node js Modules</li>
              <li>Node js Concepts</li>
              <li>Node js Events</li>
              <li>Node js with Express js</li>
              <li>Node js Database Access</li>
            </ul>
          </div>
        </div>
        {/* Module 6 */}
        <div className="course-card3">
          <div className="card-title">
            Module 6 of Full stack developer course syllabus: MongoDB
          </div>
          <div className="card-content">
            <ul>
              <li>SQL and NoSql Concepts</li>
              <li>Create and Manage MongoDB</li>
              <li>Migration of Data into MongoDB</li>
              <li>MongoDB with PHP</li>
              <li>MongoDB with NodeJS</li>
              <li>Services Offered by MongoDB</li>
            </ul>
          </div>
        </div>
        {/* More Modules... */}
        {/* Add more module cards here as needed */}
      </div>
    </div>
  );
};

export default FullStack;
