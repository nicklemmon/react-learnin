import React from 'react';
import styles from './Card.css';

function CardList( props ) {
  const itemContents = props.itemContents;
  const itemClickMethod = props.itemClickMethod;
  const listItems = itemContents.map( ( itemContent ) =>
    <li onClick={ itemClickMethod } className={ styles.CardListItem } key={ `${itemContent}-${Math.random(1, 100)}` } value={ itemContent } tabIndex="0" role="button">{ itemContent }</li>
  );

  return (
    <ul className={ styles.CardList }>
      { listItems }
    </ul>
  );
}

export default CardList;