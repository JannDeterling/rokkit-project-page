import React from "react";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left-container">
          <a href="https://github.com/rokkit-ts">GitHub</a>
          <span>Rokkit.ts code is build under MIT License</span>
        </div>
        <div className="footer-right-container">
          <span></span>
          <span className="copyright">
            2019 Copyright All Rights Reserved by Jann Deterling
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
