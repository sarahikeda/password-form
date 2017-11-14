import React from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
  renderFooter() {
    return (
      <div className="footer">
        <p className="footer-contact">
          <FontAwesome
            className="phone-icon"
            name='phone'/>
          Having issues? Contact the Support Desk</p>
      </div>
    )
  }

  render() {
    return this.renderFooter();
  }
}

export default Footer;
