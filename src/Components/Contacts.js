import React from "react";
import '../Styles/Contact.css'
export const Contacts = () => {
  return (
    <>
      <div id="main">
        <div className="main1">
          <h1>Contact Us</h1>
          <input type="text" placeholder="Enter Your Name" />
          <br />
          <br />
          <input type="text" placeholder="Enter Your Email" />
          <br />
          <br />
          <input type="password" placeholder="Enter Your password" />
          <br />
          <br />
          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Message"
          ></textarea>
          <br />
          <br />
          <input
            className="submit-button"
            type="button"
            value="Submit Detail"
          />
        </div>
        <div className="main2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7569.2382288490135!2d73.826095!3d18.455595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295c1e1b82c9d%3A0xbd383e5b30f8ded8!2sGrowmore%20Technoline%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714110747621!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
