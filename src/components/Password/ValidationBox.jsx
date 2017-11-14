import React from 'react';
import { Panel } from 'react-bootstrap';
import ValidationConditionsList from '../Validation/ValidationConditionsList';

class ValidationBox extends React.Component {

  render() {
    return (
      <div className="validation-box">
        <Panel header={<p>Your password must contain:</p>} bsStyle="primary">
          <ValidationConditionsList passwordInput={this.props.passwordInput}/>
        </Panel>
      </div>
    );
  }
}

export default ValidationBox;
