import React from "react";
import "../Styles/anode.css";
const Anod = () => {
  return (
    <div className="node-container">
      <h1 className="node-heading"> NodeJS Syllbus</h1>

      {/* Module Cards */}
      <div className="course-container3">
        {/* Module 1 */}
        <div className="course-card3">
          <div className="card-title">Module 1: Introduction</div>
          <div className="card-content">
            <ul>
              <li>What is Node.js?</li>
              <li>Features of Node.js </li>
              <li>Who Uses Node.js?</li>
              <li>Concepts</li>
              <li>Where to Use Node.js?</li>
              <li>Where Not to Use Node.js?</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">Module 2. Environment Setup</div>
          <div className="card-content">
            <ul>
              <li>Try it Option Online</li>
              <li>Local Environment Setup</li>
              <li>Text Editor</li>
              <li>The Node.js Runtime</li>
              <li> Download Node.js Archive </li>
              <li>Installation on UNIX/Linux/Mac OS X and SunOS</li>
              <li>Installation on Windows</li>
              <li>Verify Installation: Executing a File</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="course-card3">
          <div className="card-title">Module 3. First Application</div>
          <div className="card-content">
            <ul>
              <li>Creating Node.js Application</li>
            </ul>
          </div>
        </div>
        {/* Module 4 */}
        <div className="course-card3">
          <div className="card-title">Module 4. NPM</div>
          <div className="card-content">
            <ul>
              <li>Installing Modules using NPM</li>
              <li>Global vs Local Installation</li>
              <li>Using package.json</li>
              <li>Attributes of Package.json</li>
              <li>Uninstalling a Module </li>
              <li>Updating a Module</li>
              <li>Search a Module</li>
              <li>Create a Module</li>
            </ul>
          </div>
        </div>
        {/* Module 5 */}
        <div className="course-card3">
          <div className="card-title">Module 5. Callback Concept</div>
          <div className="card-content">
            <ul>
              <li> What is Callback?</li>
              <li>Blocking Code Example</li>
              <li>Non-Blocking Code Example</li>
            </ul>
          </div>
        </div>
        {/* Module 6 */}
        <div className="course-card3">
          <div className="card-title">Module 6. Event Loop</div>
          <div className="card-content">
            <ul>
              <li>Event-Driven Programming </li>
              <li>Example</li>
              <li>How Node Applications Work? .</li>
            </ul>
          </div>
        </div>
        {/* Module 7 */}
        <div className="course-card3">
          <div className="card-title">Module 7. Event Emitter</div>
          <div className="card-content">
            <ul>
              <li>EventEmitter Class</li>
              <li>Methods</li>
              <li>Class Methods</li>
              <li>Events.</li>
              <li>Example</li>
            </ul>
          </div>
        </div>
        {/* Module 8 */}
        <div className="course-card3">
          <div className="card-title">Module 8. Buffers</div>
          <div className="card-content">
            <ul>
              <li>Creating Buffers</li>
              <li>Writing to Buffers</li>
              <li>Reading from Buffers</li>
              <li>Convert Buffer to JSON</li>
              <li>Concatenate Buffers</li>
              <li>Compare Buffers</li>
              <li>Copy Buffer</li>
              <li>Slice Buffer</li>
              <li>Buffer LengthMethods Reference </li>
              <li>Class Methods</li>
            </ul>
          </div>
        </div>
        {/* Module 9 */}
        <div className="course-card3">
          <div className="card-title">Module 9. Streams</div>
          <div className="card-content">
            <ul>
              <li>What are Streams?</li>
              <li>Reading from a Stream</li>
              <li>Writing to a Stream </li>
              <li>Piping the Streams</li>
              <li>Chaining the Streams</li>
            </ul>
          </div>
        </div>
        {/* Module 10 */}
        <div className="course-card3">
          <div className="card-title">Module 10. File System</div>
          <div className="card-content">
            <ul>
              <li>Synchronous vs Asynchronous</li>
              <li>Open a File</li>
              <li>Get File Information</li>
              <li>Writing a File </li>
              <li>Reading a File</li>
              <li>Closing a File</li>
              <li>Truncate a File</li>
              <li>Delete a File</li>
              <li>Create a Directory</li>
              <li>Read a Directory</li>
              <li>Remove a Directory</li>
              <li>Methods Reference</li>
            </ul>
          </div>
        </div>
        {/* Module 11 */}
        <div className="course-card3">
          <div className="card-title">Module 11. Global Objects</div>
          <div className="card-content">
            <ul>
              <li>__filename</li>
              <li>__dirname</li>
              <li>setTimeout(cb, ms)</li>
              <li>clearTimeout (t)</li>
              <li>setInterval(cb, ms)</li>
              <li>Global Objects</li>
              <li>Console Object</li>
              <li>Process Object</li>
            </ul>
          </div>
        </div>
        {/* Module 12 */}
        <div className="course-card3">
          <div className="card-title">Module 12. Utility Modules</div>
          <div className="card-content">
            <ul>
              <li>OS Module</li>
              <li>Path Module</li>
              <li>Net Module</li>
              <li>DNS Module</li>
              <li>Domain Module</li>
            </ul>
          </div>
        </div>
        {/* Module 13 */}
        <div className="course-card3">
          <div className="card-title">Module 13. Web Module</div>
          <div className="card-content">
            <ul>
              <li>What is a Web Server?</li>
              <li>Web Application Architecture </li>
              <li>Creating a Web Server using Node</li>
              <li>Make a request to Node.js server </li>
              <li>Creating a Web client using Node</li>
            </ul>
          </div>
        </div>

        {/* More Modules... */}
        {/* Add more module cards here as needed */}
      </div>
    </div>
  );
};

export default Anod;
