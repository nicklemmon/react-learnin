import React, { Component } from 'react';
import styles from './FormGroup.css';

class FormElement extends Component {
  constructor( props ) {
    super( props );
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    this.setState({
      value: event.target.value
    });
  }

  handleKeyPress( event ) {
    if ( event.key === 'Enter' ) {
      console.log( 'enter key pressed' );
    }
  }

  render() {
    return (
      <input value={ this.state.value } onKeyPress={ this.handleKeyPress } onChange={ this.handleChange } type={ this.props.type } className={`${ styles.FormElement } ${ this.props.FormElementClassnames }`} placeholder={ this.props.placeholder } id={ this.props.id } { ...this.props.attributes } />
    )
  }
}

export default FormElement;