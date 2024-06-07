import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import "../Styles/Footer.css";
import TechnologyMarquee from "./TechnologyMarquee";
const Footer = () => {
  return (
    <div>
      <div>
        <TechnologyMarquee />
      </div>

      <div>
        <br></br>
        <br></br>

        <div class="foot">
          <div className="headericon">
            <h1>Growmore Technoline Pvt Ltd</h1>

            <div className="social-icons">
              <FaWhatsapp className="icon" />
              <FaInstagram className="icon" />
              <CiFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaPinterest className="icon" />
            </div>
          </div>
          <div class="foot1">
            <ul>
              <a href="">
                <li class="foot2">Useful Links</li>
              </a>
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>About us</li>
              </a>
              <a href="">
                <li>Services</li>
              </a>
              <a href="">
                <li>Terms Of service</li>
              </a>
              <a href="">
                <li>Privacy policy</li>
              </a>
            </ul>
          </div>
          <div class="foot1">
            <ul>
              <a href="">
                <li class="foot2">Our Services</li>
              </a>
              <a href="">
                <li>Web Design</li>
              </a>
              <a href="">
                <li>Web Development</li>
              </a>
              <a href="">
                <li>Services</li>
              </a>
              <a href="">
                <li>UI/UX Design</li>
              </a>
              <a href="">
                <li>Mobile Application</li>
              </a>
            </ul>
          </div>
          <div class="foot1">
            <ul>
              <a href="">
                <li class="foot2">Growmore Technoline Pvt.Ltd</li>
              </a>
              <a href="">
                <li>Survey no. 48/28</li>
              </a>
              <a href="">
                <li>Near Pratik hostel</li>
              </a>
              <a href="">
                <li>Manaji nagar Narhe</li>
              </a>
              <a href="">
                <li>Pune</li>
              </a>
              <a href="">
                <li>Phone: +9049080080</li>
              </a>
              <a href="">
                <li>Email: Growmoretechnoline@gmail.com</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
