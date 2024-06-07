import React from "react";
import "../Styles/anode.css";
const Ccss = () => {
  return (
    <div className="node-container">
      <h1 className="node-heading"> CSS Syllbus</h1>

      {/* Module Cards */}
      <div className="course-container3">
        {/* Module 1 */}
        <div className="course-card3">
          <div className="card-title">Module 1: CSS Basics</div>
          <div className="card-content">
            <ul>
              <li>CSS Comments</li>

              <li>CSS Syntax</li>
              <li>CSS Introduction</li>
              <li>Types of CSS (Cascading Style Sheet)</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">Module 2: CSS Selectors</div>
          <div className="card-content">
            <ul>
              <li>CSS #id Selector</li>
              <li>CSS Class Selector</li>
              <li>CSS * Selector</li>
              <li>CSS Attribute Selector</li>
              <li>CSS Pseudo-classes</li>
              <li>CSS element Selector</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="course-card3">
          <div className="card-title">Module 3: CSS Properties</div>
          <div className="card-content">
            <ul>
              <li>CSS Colors</li>
              <li>CSS Background</li>
              <li>CSS Borders</li>
              <li>CSS Margins</li>
              <li>CSS Fonts</li>
              <li>CSS cursor Property</li>
              <li>CSS Combinators</li>
              <li>CSS Pseudo Elements</li>
              <li>CSS Float</li>
            </ul>
          </div>
        </div>
        {/* Module 4 */}
        <div className="course-card3">
          <div className="card-title">Module 4: CSS Designing</div>
          <div className="card-content">
            <ul>
              <li>CSS Grid Layout Module</li>
              <li>CSS Box model</li>
              <li>CSS Tables</li>
            </ul>
          </div>
        </div>
        {/* Module 5 */}
        <div className="course-card3">
          <div className="card-title">Module 5: CSS Functions</div>
          <div className="card-content">
            <ul>
              <li>CSS attr() Function</li>
              <li>CSS calc() Function</li>
              <li>CSS env() Function</li>
              <li>CSS hsl() Function</li>
              <li>CSS rgb() Function</li>
              <li>CSS url() Function</li>
              <li>CSS var() Function</li>{" "}
            </ul>
          </div>
        </div>
        {/* Module 6 */}
        <div className="course-card3">
          <div className="card-title">Module 6:CSS Advanced</div>
          <div className="card-content">
            <ul>
              <li>CSS 2D Transforms</li>
              <li>CSS 3D Transforms</li>
              <li>CSS Pagination</li>
              <li>CSS Media Queries</li>
              <li>CSS Gradients</li>
              <li>CSS Shadow Effect</li>
            </ul>
          </div>
        </div>

        {/* Module 7 */}
        <div className="course-card3">
          <div className="card-title">Module 7: CSS Plugins</div>
          <div className="card-content">
            <ul>
              <li>CSS MarqueeMenu Plugin</li>
              <li>CSS Stacking Page Plugin</li>
            </ul>
          </div>
        </div>

       

       
      </div>
    </div>
  );
};

export default Ccss;
