import React, { Component } from 'react';
import styles from './FormGroup.css';

class FormButton extends Component {
  render() {
    return (
      <button onClick={ this.props.clickMethod } className={ styles.FormButton }>{ this.props.content }</button>
    )
  }
}

export default FormButton;