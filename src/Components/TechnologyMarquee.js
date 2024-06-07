import React from "react";
import "../Components/Technomar.css";
const TechnologyMarquee = () => {
  return (
    <div>
      <div className="n">
        <h1>Technology You Have to Learn</h1>
      </div>
      <div className="p">
        <div className="p1">
          <div className="marquee">
            <img
              style={{ width: "80px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
              alt="HTML5"
            />
            <img
              style={{ width: "150px" }}
              src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-320x200.png"
              alt="CSS3"
            />
            <img
              style={{ width: "80px" }}
              src="https://tse1.mm.bing.net/th?id=OIP.YPYdVAg5ieRspLI6HIpmDQHaIB&pid=Api&P=0&h=180"
              alt="JavaScript"
            />
            <img
              style={{ width: "150px" }}
              src="https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png"
              alt="Java"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React.js"
            />
            <img
              style={{ width: "83px" }}
              src="https://seekvectors.com/files/download/node%20js%20logo.png"
              alt="Node.js"
            />
            <img
              style={{ width: "90px" }}
              src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
              alt="MongoDB"
            />
            <img
              style={{ width: "90px" }}
              src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
              alt="MySQL"
            />
            <img
              style={{ width: "50px" }}
              src="https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/artificial-intelligence-ai-icon.png"
              alt="AI"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyMarquee;
