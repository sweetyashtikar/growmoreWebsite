import React from "react";
import "../Styles/anode.css";
const Chtml = () => {
  return (
    <div className="node-container">
      <h1 className="node-heading"> HTML Syllbus</h1>

      {/* Module Cards */}
      <div className="course-container3">
        {/* Module 1 */}
        <div className="course-card3">
          <div className="card-title">Module 1: Introduction</div>
          <div className="card-content">
            <ul>
              <li>Introduction to HTML</li>
              <li>Browsers and HTML</li>
              <li>Editor’s Offline and Online</li>

              <li> What is HTML?</li>
              <li>Why learn HTML?</li>
              <li>What you need to know about HTML to get started</li>
            </ul>
          </div>
        </div>

        {/* Module 2 */}
        <div className="course-card3">
          <div className="card-title">
            Module 2: Tags, Attributes and Elements
          </div>
          <div className="card-content">
            <ul>
              <li>1 What's the difference?</li>
              <li> HTML elements</li>
              <li>Tips</li>
              <li>Attributes</li>
            </ul>
          </div>
        </div>

        {/* Module 3 */}
        <div className="course-card3">
          <div className="card-title">
            Module 3: Titles. Headings. Paragraphs.
          </div>
          <div className="card-content">
            <ul>
              <li>The title tag</li>
              <li>Headings</li>
              <li>Paragraphs</li>
            </ul>
          </div>
        </div>
        {/* Module 4 */}
        <div className="course-card3">
          <div className="card-title">
            Module 4: Unnumbered, Numbered, Definition and Nested Lists
          </div>
          <div className="card-content">
            <ul>
              <li>Ordered lists</li>
              <li>Unordered lists</li>
              <li>Description lists</li>
              <li>Nested lists</li>
            </ul>
          </div>
        </div>
        {/* Module 5 */}
        <div className="course-card3">
          <div className="card-title">
            Module 5: How to Makes Links to Other Pages and Elsewhere
          </div>
          <div className="card-content">
            <ul>
              <li>Regular or text links</li>
              <li>Image links</li>
              <li>Links to e­mail addresses</li>
              <li>Anchor links</li>
              <li> Other considerations when creating links</li>
            </ul>
          </div>
        </div>
        {/* Module 6 */}
        <div className="course-card3">
          <div className="card-title">Module 6: How to Work with Images</div>
          <div className="card-content">
            <ul>
              <li>The alt attribute</li>
              <li>The width and height attributes</li>
              <li>Align your images</li>
              <li> Adding links to your images</li>
            </ul>
          </div>
        </div>

        {/* Module 7 */}
        <div className="course-card3">
          <div className="card-title">Module 7: How to Use Tabular Data</div>
          <div className="card-content">
            <ul>
              <li>1 When to use tables and when not to</li>
              <li>Creating tables</li>
              <li> More on the border attribute</li>
              <li> Captioning a table</li>
              <li>Working with cells that take up two rows or two columns</li>
              <li>HTML tables are very flexible</li>
              <li>Making data easier to read</li>
            </ul>
          </div>
        </div>

        {/* Module 8 */}
        <div className="course-card3">
          <div className="card-title">
            Module 8: Text Boxes and Other User­Input "Thingamajigs"
          </div>
          <div className="card-content">
            <ul>
              <li> Form fields</li>
              <li>Text field</li>
              <li> Password</li>
              <li>Checkboxes</li>
              <li>Radio buttons</li>
              <li>Submit</li>
              <li>Reset button</li> <li> Drop­down menus</li> <li>Text area</li>
            </ul>
          </div>
        </div>

        {/* Module 9 */}
        <div className="course-card3">
          <div className="card-title">Module 9: HTML for Beginners: CSS</div>
          <div className="card-content">
            <ul>
              <li>Benefits of using CSS</li>
              <li>A brief history of CSS</li>
              <li> How to use CSS with your HTML document</li>
              <li>What you should know about cascading stylesheets?</li>
            </ul>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default Chtml;
