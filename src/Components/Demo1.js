import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Demo1.css"; // Add your custom styles here
import { Link } from "react-router-dom";
const Demo1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="aa">Our Specalization</h1>

      <div className="democard">
        <Slider {...settings}>
          <div className="democard1">
            <img
              src="https://www.radicaltechnologies.co.in/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-5.55.16-PM.jpeg"
              alt=""
            />
            <h2>Java Full Stack </h2>
            <p style={{ marginTop: 40 }}>
              <b>Startdate </b>: 12/04/2024
            </p>
            <p>
              <b>Duration </b>: 5 Month
            </p>
           <Link to='/jfsd'> <input type="button" defaultValue="Check Now" /></Link>
          </div>
          <div className="democard2">
            <img
              src="https://www.radicaltechnologies.co.in/wp-content/uploads/2023/08/PYTHON-SCRIPTING.jpeg"
              alt=""
            />
            <h2>Python Scripting</h2>
            <p style={{ marginTop: 40 }}>
              <b>Startdate </b>: 12/05/2024
            </p>
            <p>
              <b>Duration </b>: 3 Month
            </p>
          <Link to='/python'>  <input type="button" defaultValue="Check Now" /></Link>
          </div>
          <div className="democard3">
            <img
              src="https://www.radicaltechnologies.co.in/wp-content/uploads/2023/09/DATA-SCIENCE-COMBO-1.jpeg"
              alt=""
            />
            <h2>Data Science </h2>
            <p style={{ marginTop: 40 }}>
              <b>Startdate </b>: 10/05/2024
            </p>
            <p>
              <b>Duration </b>: 5 Month
            </p>
           <Link to='/ds'> <input type="button" defaultValue="Check Now" /></Link>
          </div>
          <div className="democard4">
            <img
              src="https://nietm.in/wp-content/uploads/2022/12/AI2.jpg"
              alt=""
            />
            <h2>Artificial Inteligeance </h2>
            <p style={{ marginTop: 40 }}>
              <b>Startdate</b> : 14/05/2024
            </p>
            <p>
              <b>Duration </b>: 4 Month
            </p>
           <Link to='/ai'> <input type="button" defaultValue="Check Now" /></Link>
          </div>
          <div className="democard5">
            <img
              src="https://www.quickxpertinfotech.com/images/technology/machine-learning-ai-courses-in-thane.jpg"
              alt=""
            />
            <h2>Machine Learning</h2>
            <p style={{ marginTop: 40 }}>
              <b>Startdate </b>: 19/05/2024
            </p>
            <p>
              <b>Duration </b>: 3 Month
            </p>
            <Link to='/ml'><input type="button" defaultValue="Check Now" /></Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Demo1;
