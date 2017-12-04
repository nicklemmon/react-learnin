import React, { Component } from 'react';
import GoCheck from 'react-icons/lib/go/check';
import styles from './Card.css';

class CardListItem extends Component {
  render() {
    return (
      <li 
        onClick={ this.props.clickMethod } 
        className={ styles.CardListItem }
        value={ this.props.itemContent } 
        tabIndex="0" 
        role="button">

        { this.props.itemContent }

        <GoCheck className={ styles.CardListIcon }/>
      </li>
    );
  }
}

export default CardListItem;