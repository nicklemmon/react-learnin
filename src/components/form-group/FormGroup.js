import React, { Component } from 'react';
import styles from './FormGroup.css';

import FormLabel from './FormLabel.js';
import FormElement from './FormElement.js';
import FormButton from './FormButton.js';
import InlineAlert from '../inline-alert/InlineAlert.js';

class FormGroup extends Component {
  render() {
    const alertState = this.props.alertState;
    const hasButton = this.props.hasButton;

    return (
      <div className={ styles.FormGroup}>
        <FormLabel
          for={ this.props.id } 
          content={ this.props.labelContent }>
        </FormLabel>

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

        { alertState === 'error' &&
          <InlineAlert classNames={ styles.FormInlineAlert } alertType="error" alertContent={ this.props.alertErrorContent } />
        }
      </div>
    )
  }
}

export default FormGroup;