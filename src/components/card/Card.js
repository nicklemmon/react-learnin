import React, { Component } from 'react';
import styles from './Card.css';
import CardHeader from './CardHeader.js';
import CardList from './CardList.js';

class Card extends Component {
 render() {
  return (
   <div className={ styles.Card }>
    <CardHeader content="Nick's todo list"></CardHeader>
    <CardList itemContents={ this.props.listArray }></CardList>
   </div>
  )
 }
}

export default Card;