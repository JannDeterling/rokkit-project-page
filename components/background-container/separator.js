import * as React from "react";

import "./backgroundContainer.scss";

class Separator extends React.Component {

  render() {
    return (
        <div className={this.props.class}/>
    );
  }
}

export default Separator;
