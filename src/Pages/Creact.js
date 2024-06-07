import React from "react";
import "../Styles/anode.css";
const Creact = () => {
  return (
    <div>
      <div className="node-container">
        <h1 className="node-heading">ReactJS Syllbus</h1>

        {/* Module Cards */}
        <div className="course-container3">
          {/* Module 1 */}
          <div className="course-card3">
            <div className="card-title">
              Module 1. Introduction to React.js{" "}
            </div>
            <div className="card-content">
              <ul>
                <li>History</li>
                <li>Features</li>
                <li>
                  Setting up a React development environment (e.g., Node.js,
                  npm, Create React App)
                </li>
              </ul>
            </div>
          </div>
        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">
            Module 2. Creating Your First React Application
          </div>
          <div className="card-content">
            <ul>
              <li>Hello World example</li>
              <li>Understanding React components</li>
              <li>JSX syntax</li>
            </ul>
          </div>
        </div>
        {/* Module 3 */}
        <div className="course-card3">
          <div className="card-title">
            Module 3. Understanding Components and Props{" "}
          </div>
          <div className="card-content">
            <ul>
              <li>Functional components</li>
              <li>Class components</li>
              <li>Passing and using props </li>
            </ul>
          </div>
        </div>
        {/* Module 4 */}
        <div className="course-card3">
          <div className="card-title">Module 4. State and Lifecycle </div>
          <div className="card-content">
            <ul>
              <li>Updating state</li>
              <li>State in React components</li>
              <li>Component lifecycle methods</li>
            </ul>
          </div>
        </div>
        {/* Module 5 */}
        <div className="course-card3">
          <div className="card-title">Module 5. React Hooks </div>
          <div className="card-content">
            <ul>
              <li>useState()</li>
              <li>useEffect()</li>
              <li>useContext() </li>
            </ul>
          </div>
        </div>
        {/* Module 6 */}
        <div className="course-card3">
          <div className="card-title">Module 6. Handling Events </div>
          <div className="card-content">
            <ul>
              <li>Event handling in React</li>
              <li>Binding event handlers</li>
              <li>Arrow functions vs. regular functions </li>
            </ul>
          </div>
        </div>
        {/* Module 7 */}
        <div className="course-card3">
          <div className="card-title">Module 7. Working with Forms</div>
          <div className="card-content">
            <ul>
              <li>Controlled components</li>
              <li>Handling form submission</li>
              <li>Form validation </li>
            </ul>
          </div>
        </div>
        {/* Module 8 */}
        <div className="course-card3">
          <div className="card-title">Module 8. Conditional Rendering </div>
          <div className="card-content">
            <ul>
              <li>Conditional rendering with if statements</li>
              <li>Ternary operators and logical && in JSX</li>
            </ul>
          </div>
        </div>
        {/* Module 9 */}
        <div className="course-card3">
          <div className="card-title">Module 9. Lists and Keys</div>
          <div className="card-content">
            <ul>
              <li>Rendering Lists</li>
              <li>Using .map() to render lists of elements</li>
              <li>Providing a key for each item</li>
            </ul>
          </div>
        </div>
        {/* Module 10 */}
        <div className="course-card3">
          <div className="card-title">Module 10. Understanding Keys </div>
          <div className="card-content">
            <ul>
              <li>The importance of keys in React </li>
              <li>Choosing the correct key </li>
            </ul>
          </div>
        </div>
        {/* Module 11 */}
        <div className="course-card3">
          <div className="card-title">Module 11. Styling in React.js </div>
          <div className="card-content">
            <ul>
              <li> CSS in React</li>
              <li>
                Different approaches for styling (CSS, CSS-in-JS, CSS Modules)
              </li>
              <li>Inline styles</li>
              <li>Styling Libraries</li>
              <li>Popular CSS frameworks (e.g., Bootstrap, Material-UI)</li>
            </ul>
          </div>
        </div>
        {/* Module 12 */}
        <div className="course-card3">
          <div className="card-title">Module 12. React Router</div>
          <div className="card-content">
            <ul>
              <li>Introduction to React Router </li>
              <li>Setting up React Router</li>
              <li>Creating routes</li>
              <li>Navigating with React Router</li>
              <li>Using Link and NavLink</li>
              <li>Nested Routes and Dynamic Routing</li>
              <li>Nested routes</li>
              <li>Passing parameters to routes</li>
            </ul>
          </div>
        </div>
        {/* Module 13*/}
        <div className="course-card3">
          <div className="card-title">
            Module 13. State Management with Redux{" "}
          </div>
          <div className="card-content">
            <ul>
              <li> Introduction to Redux</li>
              <li>Understanding the need for state management</li>
              <li>Basic concepts: actions, reducers, store</li>
              <li>Setting Up Redux</li>
              <li>Installing Redux and setting up a store</li>
              <li>Creating actions and reducers</li>
              <li>Connecting React with Redux</li>
              <li>Using connect to connect components to the store</li>
              <li>Dispatching actions</li>
            </ul>
          </div>
        </div>
        {/* Module 14 */}
        <div className="course-card3">
          <div className="card-title">
            Module 14. Asynchronous Programming and API Integration{" "}
          </div>
          <div className="card-content">
            <ul>
              <li> AJAX and Fetch API</li>
              <li>Making HTTP requests in React</li>
              <li>Fetching data from an API</li>
              <li>Async/Await and Promises</li>
            </ul>
          </div>
        </div>
        {/* Module 15 */}
        <div className="course-card3">
          <div className="card-title">
            Module 15. Handling errors in React applications
          </div>
          <div className="card-content">
            <ul>
              <li> Error Handling and Debugging</li>
              <li>Debugging React apps</li>
              <li>Performance Optimization</li>
              <li>Memoization</li>
              <li>React.memo and PureComponent</li>
            </ul>
          </div>
        </div>
        {/* Module 16 */}
        <div className="course-card3">
          <div className="card-title">
          Module 16. Deploying a React application
          </div>
          <div className="card-content">
            <ul>
             <li>Deployment Cloud Services (Netlify, Vercel, AWS)</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Creact;
