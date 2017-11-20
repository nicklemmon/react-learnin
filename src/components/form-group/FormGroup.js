import React, { Component } from 'react';
import styles from './FormGroup.css';

import Label from './Label.js';
import FormElement from './FormElement.js';
import FormButton from './FormButton.js';

class FormGroup extends Component {
  render() {
    const hasButton = this.props.hasButton;

    let button = null;

    return (
      <div className={ styles.FormGroup}>
        <Label 
          for={ this.props.id } 
          content={ this.props.labelContent }>
        </Label>

        <div className={ styles.FormGroupContents }>
          <FormElement 
            onChange={ this.props.onChange }
            onKeyPress={ this.props.formElementKeyPressMethod } 
            value={ this.props.formElementValue }
            id={ `${this.props.id}-form-element` } 
            placeholder={ this.props.placeholder } 
            type={ this.props.type } />

          { hasButton === true &&
            <FormButton 
              clickMethod={ this.props.buttonClickMethod } 
              content={ this.props.buttonContent } />
          }
        </div>
      </div>
    )
  }
}

export default FormGroup;