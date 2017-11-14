import React from 'react';
import ValidationCondition from './ValidationCondition'

class ValidationConditionsList extends React.Component {

  checkConditionsMet = () => {
    let passwordConditions = [{rule: /.{7,}/, description: '7 characters minimum'}, {rule: /[a-z]/, description: 'Lowercase letter'}, {rule: /[A-Z]/, description: 'Capital letter'}, {rule: /\d+/, description: 'Number'}, {rule: /[-\/\\^$*+?.()!|[\]{}#@%&]/, description: 'Special character'}]

    return (passwordConditions.map((condition, index) => {
      if (condition.rule.test(this.props.passwordInput)) {
        return (
          <ValidationCondition
            key={index}
            class='validation-circle met' description={condition.description}/>
        )
      } else {
        return (
          <ValidationCondition
            key={index}
            class='validation-circle' description={condition.description}/>
        )
      }
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
