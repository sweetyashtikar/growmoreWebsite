import React from "react";
import "../Styles/Home.css";
import Demo1 from "./Demo1";

const Home = () => {
  return (
    <div>
      <section>
        <div className="one">
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          <p>
            Empowering Tomorrow's Innovators: Master Full Stack Development with
            Our Comprehensive Courses!
          </p>
        </div>
      </section>
      <br></br>
      <div className="two">
        <div className="three">
          <h1>
            Empower Your Future: Unlocking Success with Cutting-edge IT Training
            at Growmore Technoline India Pvt Ltd.
          </h1>
          <p>
            <i>
              Join us for a transformative journey into coding excellence,
              mastering the full stack. Unleash your potential with our concise
              and comprehensive Full Stack Development program.
            </i>
          </p>
          <p>
            Comprehensive Curriculum: Covering front-end and back-end
            technologies, databases, and frameworks to ensure a holistic
            understanding of full stack development.
          </p>
          <p>
            Practical, real-world projects that reinforce theoretical concepts,
            providing students with valuable experience.
          </p>
          <p>
            Industry professionals with extensive experience, offering insights
            into current best practices and emerging trends in full stack
            development.
          </p>
          <p>
            Job placement assistance, resume workshops, and interview
            preparation to help students transition seamlessly into full stack
            development roles.
          </p>
          <p>
            Access to cutting-edge tools and technologies, creating a dynamic
            learning environment that mirrors industry standards.
          </p>
        </div>
        <div className="four">
          <img src="/Images/about1.jpg" alt="About us" />
        </div>
      </div>
      <br></br>
      <div className="services">
        <h1 className="aa">Our Services</h1>

        <div className="b1">
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://img.freepik.com/free-vector/classroom-concept-illustration_114360-2112.jpg"
              alt=""
            />
            <p>
              Classroom <br /> Training
            </p>
          </div>
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5n6ZFhCzGnFwjESxiXcvxP70QkgccOvug_RZPpNBO3A&s"
              alt=""
            />
            <p>Online Training</p>
          </div>
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEZ33A8oiCJq3ejXdDTfmQY7H9j1ONp9gmozxy_WASUwNTqLCWhLADyhmrpqUV3t-Wjc&usqp=CAU"
              alt=""
            />
            <p>Job Oriented Training</p>
          </div>
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://static.vecteezy.com/system/resources/previews/004/379/121/original/office-workers-brainstorming-teamwork-flat-illustration-business-conference-seminar-corporate-training-managers-team-working-isolated-cartoon-characters-employees-executives-board-of-directors-vector.jpg"
              alt=""
            />
            <p>Corporate Training</p>
          </div>
        </div>
      </div>

      <div>
        <Demo1 />
      </div>
    </div>
  );
};

export default Home;
