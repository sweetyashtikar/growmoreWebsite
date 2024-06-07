import React from "react";
import "../Styles/anode.css";
const CAngular = () => {
  return (
    <div>
      <div className="node-container">
        <h1 className="node-heading">AngularJS Syllbus</h1>

        {/* Module Cards */}
        <div className="course-container3">
          {/* Module 1 */}
          <div className="course-card3">
            <div className="card-title">Module 1: Introduction</div>
            <div className="card-content">
              <ul>
                <li> Introduction to AngularJS</li>
                <li>MVC Architecture</li>
                <li>Conceptual Overview</li>
                <li>Setting up the Environment</li>
                <li>First Application</li>
                <li>Understanding ng attributes</li>
              </ul>
            </div>
          </div>
          {/* Module 2 */}
          <div className="course-card3">
            <div className="card-title">
              Module 2: Expressions and Data Biding
            </div>
            <div className="card-content">
              <ul>
                <li>Number and String Expressions</li>
                <li>Object Binding and Expressions</li>
                <li>Working with Arrays</li>
                <li>Forgiving Behavior</li>
                <li> Understanding Data binding</li>
              </ul>
            </div>
          </div>
          {/* Module 3 */}
          <div className="course-card3">
            <div className="card-title">Module 3: Working with Directives</div>
            <div className="card-content">
              <ul>
                <li>Conditional Directives</li>
                <li>Styles Directives</li>
                <li>Mouse and Keyboard Events Directives </li>
              </ul>
            </div>
          </div>
          {/* Module 4 */}
          <div className="course-card3">
            <div className="card-title">Module 4: Controllers </div>
            <div className="card-content">
              <ul>
                <li>Understanding Controllers</li>
                <li>Programming Controllers & $scope object</li>
                <li>Adding Behavior to a Scope Object</li>
                <li>Passing Parameters to the Methods</li>
                <li>Having Array as members in Controller Scope.</li>
                <li>Nested Controllers and Scope Inheritance.</li>
                <li>Multiple Controllers and their scopes</li>
              </ul>
            </div>
          </div>
          {/* Module 5 */}
          <div className="course-card3">
            <div className="card-title">Module 5. Filters </div>
            <div className="card-content">
              <ul>
                <li>Built-In Filters </li>

                <li>Uppercase and Lowercase Filters</li>
                <li>Currency and Number Formatting Filters</li>
                <li>OrderBy Filter</li>
                <li>Filter Filter</li>
                <li> Creating Custom Filter</li>
              </ul>
            </div>
          </div>
          {/* Module 6 */}
          <div className="course-card3">
            <div className="card-title">Module 6. Forms </div>
            <div className="card-content">
              <ul>
                <li>Using Simple Form</li>
                <li>Working with Select and Options</li>
                <li>Using CSS classes</li>
                <li>Form Events</li>
                <li>Custom Model update triggers</li>
                <li>Custom Validations</li>
              </ul>
            </div>
          </div>
          {/* Module 7 */}
          <div className="course-card3">
            <div className="card-title">Module 7. Modules</div>
            <div className="card-content">
              <ul>
                <li>Why Module?</li>
                <li>Module Loading and Dependencies</li>
                <li>Recommended Setup of Application</li>
                <li>Creation vs Retrieval.</li>
              </ul>
            </div>
          </div>
          {/* Module 8 */}
          <div className="course-card3">
            <div className="card-title">Module 8. Services </div>
            <div className="card-content">
              <ul>
                <li>Understanding Services</li>
                <li>Developing Creating Services</li>
                <li>Using a Service</li>
                <li>Injecting Dependencies in a Service</li>
              </ul>
            </div>
          </div>
          {/* Module 9 */}
          <div className="course-card3">
            <div className="card-title">Module 9. Ajax in AngularJS</div>
            <div className="card-content">
              <ul>
                <li>$http Service</li>
                <li>$q Service</li>
                <li>Ajax Impl using $http and $q Service</li>
              </ul>
            </div>
          </div>
          {/* Module 10 */}
          <div className=" .course-card3 ">
            <div className="card-title">Module 10. Routing</div>
            <div className="card-content">
              <ul>
                <li>Introduction to SPA</li>
                <li>Creating HTML Templates</li>
                <li>Configuring Route Provider</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAngular;
