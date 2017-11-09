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
        <Label for={ this.props.id } content={ this.props.labelContent }></Label>

        <div className={ styles.FormGroupContents }>
          <FormElement id={ this.props.id } placeholder={ this.props.placeholder } type={ this.props.type }></FormElement>

          { hasButton === true &&
            <FormButton clickMethod={ this.props.buttonClickMethod } content={ this.props.buttonContent }></FormButton>
          }
        </div>
      </div>
    )
  }
}

export default FormGroup;