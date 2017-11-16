import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <Navbar className="navigation-bar">
          <Navbar.Header>
            <Navbar.Brand>
              <img
                className="goldman-logo"
                src={require("../../../images/goldman-logo.png")}
                alt="goldman-logo"/>
            </Navbar.Brand>
            <Navbar.Text className="sub-header">
              <div className="description-text">Private Bank</div>
              <div className="sub-description-text">SELECT</div>
            </Navbar.Text>
           </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Navbar.Text>
              <div className="nav-links">Help</div>
            </Navbar.Text>
            <Navbar.Text>
              <div className="nav-links">Logout</div>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
