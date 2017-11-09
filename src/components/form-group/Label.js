import React, { Component } from 'react';
import styles from './FormGroup.css';

class Label extends Component {
  render() {
    return (
      <label className={ styles.Label } htmlFor={ this.props.for }>
        { this.props.content }
      </label>
    )
  }
}

export default Label;