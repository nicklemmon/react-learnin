import React from 'react';
import styles from './Card.css';
import CardListItem from './CardListItem.js';

function CardList( props ) {
  const itemContents = props.itemContents;
  const itemClickMethod = props.itemClickMethod;

  let listItems;

  if ( itemContents.length < 1 ) {
    listItems = <div className={ styles.CardContent }>Nothing left to do...</div>
  } else {
    listItems = itemContents.map( ( itemContent, index ) =>
        <CardListItem
          clickMethod={ itemClickMethod }
          itemContent={ itemContent }
          key={ index }
          />
      );
    }

  return (
    <ul className={ styles.CardList }>
      { listItems }
    </ul>
  );
}

export default CardList;