import React from "react";
import Link from 'next/link';
import "./link.scss";

class CustomLink extends React.Component {

  render() {
    return (
        <div className="link">
          <Link href={this.props.link}>
            <a>
              <h3>
                {this.props.text}
              </h3>
            </a>
          </Link>
        </div>
    );
  }
}

export default CustomLink;
