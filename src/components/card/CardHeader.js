import React, { Component } from 'react';
import styles from './Card.css';

class CardHeader extends Component {
 render() {
  return (
   <div>
    <h3 className={ styles.CardHeader }>{ this.props.content }</h3>
   </div>
  )
 }
}

export default CardHeader;