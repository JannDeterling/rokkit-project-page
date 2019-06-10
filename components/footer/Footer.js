import React from "react";
import "./footer.scss";
import Separator from "../background-container/separator";

class Footer extends React.Component {

  render() {
    return (
        <footer className="footer">
          <Separator class={"separator-down-right"}/>
          <div className="footer-content">
            <h4>
              <span>&copy; 2019 Copyright All Rights Reserved by Jann Deterling</span>
            </h4>
          </div>
        </footer>
    );
  }
}

export default Footer;
