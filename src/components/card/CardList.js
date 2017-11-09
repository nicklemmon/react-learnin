import React from 'react';
import styles from './Card.css';

function CardList( props ) {
  const itemContents = props.itemContents;
  const listItems = itemContents.map( ( itemContent ) =>
    <li className={ styles.CardListItem } key={ itemContent } value={ itemContent } tabIndex="0" role="button">{ itemContent }</li>
  );

  return (
    <ul className={ styles.CardList }>
      { listItems }
    </ul>
  );
}

export default CardList;