import React, { Component } from 'react';
import styles from './FormGroup.css';

class FormLabel extends Component {
  render() {
    return (
      <label className={ styles.Label } htmlFor={ this.props.for }>
        { this.props.content }
      </label>
    )
  }
}

export default FormLabel;