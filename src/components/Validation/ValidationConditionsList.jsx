import React from 'react';
import ValidationCondition from './ValidationCondition'

class ValidationConditionsList extends React.Component {

  checkConditionsMet = () => {
    let classStyling = 'validation-circle'
    return (this.props.passwordConditions.map((condition, index) => {
      condition.rule.test(this.props.passwordInput) ?
        classStyling ='validation-circle met' :
        classStyling = "validation-circle"
      return (
        <ValidationCondition
          key={index}
          class={classStyling}
          description={condition.description}/>
      )
    }))
  }

  render() {
    return (
      <div className="validation-conditions-list">
        <ul className='password-conditions-list'>
          {this.checkConditionsMet()}
        </ul>
      </div>
    );
  }
}

export default ValidationConditionsList;
