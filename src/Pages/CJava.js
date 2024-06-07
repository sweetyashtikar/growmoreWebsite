import React from "react";
import "../Styles/anode.css";

const CJava = () => {
  return (
    <div className="node-container">
      <h1 className="node-heading"> Java Full Stack Syllbus</h1>

      {/* Module Cards */}
      <div className="course-container3">
        {/* Module 1 */}
        <div className="course-card3">
          <div className="card-title">Module 1: Java Introduction</div>
          <div className="card-content">
            <ul>
              <li>History</li>
              <li>Features</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">
            Module 2. Java Basics & Introduction to Eclipse
          </div>
          <div className="card-content">
            <ul>
              <li>Post Install Configuration</li>
              <li>compiling and executing</li>
              <li>Variables and Arrays</li>
              <li>Create packaged classes</li>
              <li> Writing a simple program</li>
              <li>Data types </li>
              <li>Using Eclipse Eclipse shortcuts</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="course-card3">
          <div className="card-title">Module 3. Operators & Expressions</div>
          <div className="card-content">
            <ul>
              <li>Arithmetic Operators</li>
              <li>Boolean Operators</li>
              <li>Logical Operators</li>
              <li>Binary Operators</li>
            </ul>
          </div>
        </div>
        {/* Module 4 */}
        <div className="course-card3">
          <div className="card-title">Module 4. Control Statements</div>
          <div className="card-content">
            <ul>
              <li>Branching Statements</li>
              <li>Iterative Statements</li>
              <li>Break & Continue with enhancements</li>
              <li>While</li>
              <li>For</li>
              <li>Do..While</li>
              <li>Break and Continue Statement</li>
            </ul>
          </div>
        </div>
        {/* Module 5 */}
        <div className="course-card3">
          <div className="card-title">
            Module 5. Java Object-Oriented Programming
          </div>
          <div className="card-content">
            <ul>
              <li>Basics of OOPS</li>
              <li>Fundamentals of class & object</li>
              <li>new keyword</li>
              <li>Reference variables</li>
              <li>Constructors</li>
              <li>Overloading member methods</li>
              <li>Break and Continue Statement</li>
              <li>Using final keyword</li>
              <li>Access Specified / Modifier</li>
            </ul>
          </div>
        </div>
        {/* Module 6 */}
        <div className="course-card3">
          <div className="card-title">Module 6. Inheritance</div>
          <div className="card-content">
            <ul>
              <li>Basics of Inheritance</li>
              <li>Using super keyword</li>
              <li>Method Overriding</li>
              <li>Abstract classes</li>
              <li>Preventing overriding</li>
              <li>Preventing inheritance</li>
              <li>Dynamic Method Dispatch</li>
            </ul>
          </div>
        </div>
        {/* Module 7 */}
        <div className="course-card3">
          <div className="card-title">Module 7. Exception Handling</div>
          <div className="card-content">
            <ul>
              <li>Fundamentals of Exceptions</li>
              <li>Types of exceptions</li>
              <li>Using try and catch keywords</li>
              <li>Nesting of try blocks</li>
              <li>Finally block</li>
              <li>Multiple catches</li>
            </ul>
          </div>
        </div>
        {/* Module 8 */}
        <div className="course-card3">
          <div className="card-title">Module 8. Interfaces</div>
          <div className="card-content">
            <ul>
              <li>Purpose of Interface</li>
              <li>Defining an interface</li>
              <li>Implementing interfaces</li>
              <li>Interface reference variables</li>
              <li>Interface with variables</li>
              <li>Extending interfaces</li>
            </ul>
          </div>
        </div>
        {/* Module 9 */}
        <div className="course-card3">
          <div className="card-title">Module 9. Predefined Libraries</div>
          <div className="card-content">
            <ul>
              <li>Using String class</li>
              <li>Using java.lang package</li>
              <li>Working with Data & Time</li>
              <li>Utility framework</li>
              <li>Collection framework</li>
              <li>I/O framework</li>
            </ul>
          </div>
        </div>
        {/* Module 10 */}
        <div className="course-card3">
          <div className="card-title">Module 10. RDBMS (MySQL)</div>
          <div className="card-content">
            <ul>
              <li>Introduction to Database & DBMS</li>
              <li>Data types</li>
              <li>Table, Record, Field</li>
              <li>Database Normalization</li>
              <li>SQL Queries,</li>
              <li>Joins, Sub Queries</li>
              <li>INSERT | UPDATE | DELETE Operations</li>
              <li>PL/Sql</li>
            </ul>
          </div>
        </div>
        {/* Module 11 */}
        <div className="course-card3">
          <div className="card-title">
            Module 11. Server-side Programming with Servlets
          </div>
          <div className="card-content">
            <ul>
              <li>
                Deploying a simple servlet in a Servlet Container (Tomcat)
              </li>
              <li>Life cycle of a Servlet</li>
              <li>Servlet interface</li>
              <li>ServletRequest Interface</li>
              <li>ServletResponse Interface</li>
              <li>Additional capabilities of HTTPServlet</li>
              <li>Session tracking</li>
              <li>Servlet Programming with JDBC CRUD Operations</li>
            </ul>
          </div>
        </div>
        {/* Module 12 */}
        <div className="course-card3">
          <div className="card-title">Module 12. Java Server Pages (JSPs)</div>
          <div className="card-content">
            <ul>
              <li>JSP Basics</li>
              <li>Developing JSP Beans</li>
              <li>JSP Syntax for Different JSP Elements</li>
              <li>JSP Implicit Objects</li>
              <li>The JSP generated Servlet code</li>
              <li>Running a simple JSP</li>
              <li>Differences between Servlets and JSPs</li>
            </ul>
          </div>
        </div>
        {/* Module 13 */}
        <div className="course-card3">
          <div className="card-title">
            Module 13. JPA-Hibernate (ORM FrameWork)
          </div>
          <div className="card-content">
            <ul>
              <li>Introduction to ORM, JPA</li>
              <li>SessionFactory, Session, Transaction</li>
              <li>Performing CRUD Operations with XML</li>
              <li>Performing CRUD Operations with Annotations</li>
              <li>Different ID Generation Strategies</li>
              <li>Hibernate with Inheritance</li>
            </ul>
          </div>
        </div>
        {/* Module 14 */}
        <div className="course-card3">
          <div className="card-title">Module 14. Spring</div>
          <div className="card-content">
            <ul>
              <li>BeanFactory and application Context</li>
              <li>Container Concepts</li>
              <li>Spring Data JPA Template</li>
              <li>AOP</li>
              <li>MVC</li>
            </ul>
          </div>
        </div>
        {/* Module 15 */}
        <div className="course-card3">
          <div className="card-title">Module 15. Spring Boot</div>
          <div className="card-content">
            <ul>
              <li>Introduction to STS</li>
              <li>Di with STS</li>
              <li>MVC, AOP</li>
              <li>
                Security, Role-based Authentication, OAuth2, Token based
                authentication
              </li>
            </ul>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default CJava;
