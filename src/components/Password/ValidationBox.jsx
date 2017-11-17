import React from 'react';
import { Panel } from 'react-bootstrap';
import ValidationConditionsList from '../Validation/ValidationConditionsList';

class ValidationBox extends React.Component {

  renderValidationBox() {
    return (
      <div className="validation-box">
        <Panel header={<p>Your password must contain:</p>} bsStyle="primary">
          <ValidationConditionsList {...this.props}/>
        </Panel>
      </div>
    );
  }
  render() {
    return this.renderValidationBox();
  }
}

export default ValidationBox;
