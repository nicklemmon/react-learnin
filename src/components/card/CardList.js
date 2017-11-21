import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GoCheck from 'react-icons/lib/go/check';
import styles from './Card.css';

function CardList( props ) {
  const itemContents = props.itemContents;
  const itemClickMethod = props.itemClickMethod;

  let listItems;

  if ( itemContents.length < 1 ) {
    listItems = <div className={ styles.CardContent }>No items found.</div>
  } else {
    listItems = itemContents.map( ( itemContent ) =>
        <li 
          onClick={ itemClickMethod } 
          className={ styles.CardListItem } 
          key={ `${itemContent}-${Math.random(1, 100)}` } 
          value={ itemContent } 
          tabIndex="0" 
          role="button">
          { itemContent }

          <GoCheck className={ styles.CardListIcon}/>
        </li>
      );
    }

  return (
    <ul className={ styles.CardList }>
      { listItems }
    </ul>
  );
}

export default CardList;