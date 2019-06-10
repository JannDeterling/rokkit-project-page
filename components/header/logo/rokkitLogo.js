import React from "react";
import Link from "next/link"
import "./rokkitLogo.scss";

class RokkitLogo extends React.Component {

  render() {
    return (
        <div className="rokkit-header-logo">
          <Link href="/">
            <a className="rokkit-logo-link">
              <img className="rokkit-logo"
                   src="../../../static/rokkit-ts-logo.svg"
                   alt="Rokkit.ts Logo"
              />
            </a>
          </Link>
        </div>
    );
  }
}

export default RokkitLogo;
