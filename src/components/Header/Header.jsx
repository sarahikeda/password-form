import React from 'react';

class Header extends React.Component {

  headerSection() {
    return (
      <div className="app-header">
        <p>Private Bank SELECT</p>
      </div>
    )
  }

  render() {
    return (
      <header>
        {this.headerSection()}
      </header>
    );
  }
}


export default Header;
