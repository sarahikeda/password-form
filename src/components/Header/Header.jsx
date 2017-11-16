import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

class Header extends React.Component {
  renderHeader() {
    return (
      <div className="header">
        <div className="navigation-header">
          <Navbar.Brand>
            <img
              className="goldman-logo"
              src={require("../../../images/goldman-logo.png")}
              alt="goldman-logo"/>
          </Navbar.Brand>
          <Navbar.Text className="sub-header">
            <span className="description-text">Private Bank</span>
            <span className="sub-description-text">SELECT</span>
          </Navbar.Text>
        </div>
        <Navbar.Collapse>
          <Nav pullRight>
            <Navbar.Text>
              <span className="nav-links">Help</span>
            </Navbar.Text>
            <Navbar.Text>
              <span className="nav-links">Logout</span>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </div>
    )
  }
  render() {
    return this.renderHeader();
  }
}

export default Header;
