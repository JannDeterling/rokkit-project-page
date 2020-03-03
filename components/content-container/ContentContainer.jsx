import React from "react";

import "./contentContainer.scss";

const ContentContainer = (props) => {
  return <div className="content-container">{props.children}</div>;
}

export default ContentContainer;
