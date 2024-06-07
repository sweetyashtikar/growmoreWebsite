import React from 'react';
import '../Styles/Contain.css'
const LearningCurve = () => {
  return (
    <div className="container">
      <div className="cont">
        <h1>
          Full Stack Developer
          <br />
          <span className="learning-curve">Learning Curve</span>
        </h1>
        <div className="card">
          <img
            src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715040000&semt=sph"
            alt=""
          />
          <div className="card1">
            <h2>HTML 5</h2>
          </div>
          <div className="card2">
            <h2>CSS3 SASS/CSS3</h2>
          </div>
          <div className="card3">
            <h2>Javascript</h2>
          </div>
          <div className="card4">
            <h2>React Js</h2>
          </div>
          <div className="card5">
            <h2>Node Express</h2>
          </div>
          <div className="card7">
            <h2>Mongo DB</h2>
          </div>
          <div className="card6">
            <h2>Full Project</h2>
          </div>
          <div className="card8">
            <img
              src="/pngtree-a-man-with-an-arrow-is-running-towards-his-goal-along-png-image_4749158.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCurve;
