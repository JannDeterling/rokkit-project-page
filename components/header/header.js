import React from "react";

import './header.scss';
import RokkitLogo from "./logo/rokkitLogo"
import ImageLink from "./link/imageLink";
import CustomLink from "./link/customLink";
import MenuButton from "./mobile-nav/menuButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleMenu() {
    this.setState({open: !this.state.open});
  }

  render() {
    const isOpen = this.state.open;
    let menu = undefined;
    if (isOpen) {
      menu = (<div className="mobile-menu">
        <CustomLink text="Documentation" link="/documentation"/>
        <CustomLink text="Guides" link="/guides"/>
        <CustomLink text="FAQ" link="/faq"/>
        <CustomLink text="About" link="/about"/>
      </div>);
    }
    return (
        <div className="header">
          <div className="header-layout">
            <div className="header-logo">
              <RokkitLogo/>
            </div>
            <div className="header-navigation">
              <CustomLink text="Documentation" link="/documentation"/>
              <CustomLink text="Guides" link="/guides"/>
              <CustomLink text="FAQ" link="/faq"/>
              <CustomLink text="About" link="/about"/>
            </div>
            <div className="header-social-media">
              <ImageLink link="https://github.com/rokkit-ts"
                         image={"../../static/github.svg"}/>
              <ImageLink link="https://twitter.com/JDeterling"
                         image={"../../static/twitter.svg"}/>
            </div>
            <div className="header-navigation-mobile">
              <MenuButton onClick={() => {
                this.toggleMenu()
              }}/>
            </div>
            <div className="header-navigation-mobile-content">
              {menu}
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
