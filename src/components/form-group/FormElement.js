import React, { Component } from 'react';
import styles from './FormGroup.css';

class FormElement extends Component {
  render() {
    return (
      <input 
        value={ this.props.value } 
        onKeyPress={ this.props.onKeyPress } 
        onChange={ this.props.onChange } 
        type={ this.props.type } 
        className={`${ styles.FormElement } ${ this.props.FormElementClassnames }`} 
        placeholder={ this.props.placeholder } 
        id={ this.props.id } 
        { ...this.props.attributes } />
    )
  }
}

export default FormElement;