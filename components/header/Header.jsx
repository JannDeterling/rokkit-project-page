import React from "react";

import "./header.scss";
import RokkitLogo from "./logo/RokkitLogo";
import ImageLink from "./link/imageLink";

const Header = (props) => {
 return(
      <div className="header">
        <div className="header-logo">
          <RokkitLogo />
        </div>
        {/* <div className="header-slogan">
          <h1>The Microservice Framework for Node.js with TypeScript</h1>
        </div> */}
        <div className="header-social-media">
          <ImageLink
            link="https://github.com/rokkit-ts"
            image={"../../static/github.svg"}
          />
          <ImageLink
            link="https://twitter.com/JDeterling"
            image={"../../static/twitter.svg"}
          />
        </div>
      </div>
    );
}

export default Header;
