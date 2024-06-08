import React,{useState,useEffect} from "react";
import "../Styles/Home.css";
import Demo1 from "./Demo1";


const courses = ["Data Science", "Full Stack development", "Artifical Intelligances","Python Develpoment","Java Full stack development"];

const Home = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 2000); // Change the course every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <section>
        <div className="one">
          <h1>Learning Today, Leading Tomorrow</h1>
          <p>
            <marquee direction="right">
              Empowering Tomorrow's Innovators: Master Full Stack Development
              with Our Comprehensive Courses!
            </marquee>
          </p>
          <div className="course-display">
            <h2> {courses[currentCourseIndex]}</h2>
          </div>
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
          <img src="/Images/abc.webp" alt="About us" />
        </div>
      </div>
      <br></br>
      <div className="services">
        <h1 className="aa">Our Services</h1>

        <div className="b1">
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_960_720.jpg"
              alt=""
            />
            <p>
              Classroom <br /> Training
            </p>
          </div>
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://cdn.pixabay.com/photo/2022/04/03/18/28/webcam-7109621_960_720.png"
              alt=""
            />
            <p>Online Training</p>
          </div>
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://cdn.pixabay.com/photo/2024/06/03/05/28/ai-generated-8805518_960_720.png"
              alt=""
            />
            <p>Job Oriented Training</p>
          </div>
          <div className="b2">
            <img
              style={{ width: 200 }}
              src="https://cdn.pixabay.com/photo/2023/01/03/18/00/interview-7695015_1280.png"
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
