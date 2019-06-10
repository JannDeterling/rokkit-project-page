import * as React from "react";
import MenuButton from "./menuButton";

class MobileNav extends React.Component {

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
      console.log(isOpen);
      menu = (<div>
        <h1>Show</h1>
      </div>);
    }
    return (
        <div>
          <MenuButton onClick={() => {
            this.toggleMenu()
          }}/>
          {menu}
        </div>
    );
  }
}

export default MobileNav;
