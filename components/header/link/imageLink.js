import React from "react";
import "./link.scss";
import Link from "next/link";

class ImageLink extends React.Component {
  render() {
    return (
        <div className="image-link">

          <Link href={this.props.link}>
            <a>
              <img className="image-link-logo"
                   src={this.props.image}
                   alt={this.props.link}
              />
            </a>
          </Link>
        </div>
    );
  }
}

export default ImageLink;
