import React from 'react';
import './About.css';

const Card = ({ imgSrc, title }) => (
  <div className="card0">
    <img src={imgSrc} alt={title} />
    <h3>{title}</h3>
  </div>
);



const About = () => {
  return (
    <div className="container0">
      <div className="about-cards">
        <div className="vision-card">
          <div className="card-content">
            <img src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg" alt="Vision Image" height="250px" width="350px" />
            <div className="text-content">
              <h2>Vision</h2>
              <p>To be a leading provider of innovative and high-quality IT training, empowering individuals and organizations to achieve their fullest potential through technology.</p>
            </div>
          </div>
        </div>
        <div className="mission-card">
          <div className="card-content">
            <img src="https://img.freepik.com/free-vector/flat-our-mission-infographic_23-2149065436.jpg" alt="Mission Image" height="250px" width="350px" />
            <div className="text-content">
              <h2>Mission</h2>
              <p>Excellence in Education: To deliver top-notch, comprehensive IT training programs that are accessible, affordable, and aligned with the latest industry standards.</p>
              <p>Student-Centric Approach: To foster a learning environment that prioritizes the needs and aspirations of our students, ensuring they receive personalized guidance and support.</p>
              <p>Industry Relevance: To continuously update our curriculum to reflect the evolving demands of the tech industry, preparing our students for real-world challenges.</p>
              <p>Professional Development: To provide extensive career development resources, including job placement assistance, resume workshops, and interview preparation, to help our students transition smoothly into the IT workforce.</p>
              <p>Community and Innovation: To cultivate a community of learners and professionals who are passionate about technology and innovation, encouraging collaboration and continuous learning.</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Beginner to Web Dev</h1>
      <div className="card0-row">
        <Card imgSrc="https://www.pngitem.com/pimgs/m/2-23455_website-logo-png-transparent-background-clipart-png-transparent.png" title="Fundamental of web & how its works" />
        <Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmou6evgeGnMsU4Kac3TEv60q65uqVigxib1NYMmoFw&s" title="HTML:5 The basic & Beyond" />
        <Card imgSrc="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" title="CSS:3 Responsive Layout & Design" />
        <Card imgSrc="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png" title="Javascript Basic & ECMAscript" />
      </div>
      <div className="card0-row">
        <Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA972a1NXwGHTIpgjxpRdu1DD5te1evggDgjNvM_FcbtGxaPYrHbV27RNzJSA_ZhrY28&usqp=CAU" title="Setting up route & Controller" />
        <Card imgSrc="https://cdn.iconscout.com/icon/free/png-256/free-node-js-3628954-3030179.png?f=webp" title="Introduction to Backend With Node Js" />
        <Card imgSrc="https://lofrev.net/wp-content/photos/2017/04/http_logo_dpwnload.png" title="HTTP and Backend Fundamental" />
        <Card imgSrc="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" title="Learn use Git & GitHub" />
      </div>
      <div className="card0-row">
        <Card imgSrc="https://ih1.redbubble.net/image.438910675.6211/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" title="CRUD Operation on Mongo DB" />
        <Card imgSrc="https://logowik.com/content/uploads/images/google-authenticator-new-202365744.logowik.com.webp" title="Authentication & Authorization" />
        <Card imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" title="Introduction to Javascript Framework" />
        <Card imgSrc="https://static-00.iconduck.com/assets.00/redux-icon-512x486-1n8k02rk.png" title="Manage Global side With Redux" />
      </div>
    </div>
  );
}

export default About;