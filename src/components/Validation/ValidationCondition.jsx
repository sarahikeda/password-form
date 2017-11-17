import React from 'react';
import FontAwesome from 'react-fontawesome';

class ValidationCondition extends React.Component {
  renderValidationCondition() {
    return (
      <div className="validation-conditions">
        <li>
          <FontAwesome
            className={this.props.class}
            name='circle'/>
          <span>{this.props.description}</span>
        </li>
      </div>
    );
  }

  render() {
    return this.renderValidationCondition();
  }
}

export default ValidationCondition;
