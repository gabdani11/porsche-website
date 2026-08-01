import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footerTop">
        <span className="buildWith">Build with</span>
        <ul>
          <li>Performance</li>
          <li>Engine Tecnology</li>
          <li>Aerodynamics</li>
          <li>Motorsport</li>
        </ul>
        <div className="craftedBy">
          <div>
            <h4>Designd to Move You</h4>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/daniel-prakash1/"
            >
              Get in touch
            </a>
          </div>
          <span>Crafted by Daniel</span>
        </div>
      </div>
      <div className="footerBottom">
        <h2 className="footerTitle1">Porsche</h2>
        <div className="footerBottomContent">
          <h2>Porsche</h2>
          <p>
            This is a personal project
            <br /> created for educational and portfolio purposes.
            <br /> All images, videos, and trademarks belong to their
            <br /> respective owners, including Porsche.
          </p>
        </div>
        <span>© 2026 Daniel. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
