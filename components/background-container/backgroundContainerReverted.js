import React from "react";

import "./backgroundContainer.scss"
import Separator from "./separator";

class BackgroundContainerReverted extends React.Component {

  render() {
    return (
        <div className="background">
          <Separator class={"separator-down-right"}/>

          <div className="highlight-box">
            <h1>{this.props.highlight}</h1>
          </div>

          <Separator class={"separator-up-left"}/>

        </div>
    );
  }
}

export default BackgroundContainerReverted
