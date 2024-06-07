import React from "react";
import "../Styles/anode.css";
const Cexpress = () => {
  return (
    <div className="node-container">
      <h1 className="node-heading"> ExpressJs with MongoDB Syllbus</h1>

      {/* Module Cards */}
      <div className="course-container3">
        {/* Module 1 */}
        <div className="course-card3">
          <div className="card-title">Module 1: Express Framework</div>
          <div className="card-content">
            <ul>
              <li>Express Overview</li>
              <li>Installing Express</li>
              <li>Hello world Example</li>
              <li>Request & Response</li>
              <li>Request Object</li>
              <li>Response Object</li>
              <li>Basic Routing </li>
              <li>Serving Static Files</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">Module 2. RESTful API </div>
          <div className="card-content">
            <ul>
              <li>What is REST Architecture?</li>
              <li>HTTP methods</li>
              <li>RESTful Web Services</li>
              <li>Creating RESTful for a Library</li>
              <li>List Users</li>
              <li>Add Users</li>
              <li>Show Detail</li>
              <li>Delete a User</li>
            </ul>
          </div>
        </div>
        {/* Module 3*/}
        <div className="course-card3">
          <div className="card-title">Module 2. CURD Operation </div>
          <div className="card-content">
            <ul>
              <li>GET Method</li>
              <li>POST Method</li>
              <li>PUT Method</li>
              <li>INSERT Method</li>
              <li>DELETE Method</li>

              <li>File Upload</li>
              <li>Cookies Management..</li>
            </ul>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Cexpress;
