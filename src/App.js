// Global
import React, { Component } from 'react';
import styles from './App.css';

// Components
import Card from './components/card/Card.js';
import FormGroup from './components/form-group/FormGroup.js';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      todoList: [],
      formElementValue: '',
      formGroupAlertState: ''
    }

    this.addItem = this.addItem.bind( this );
    this.removeItem = this.removeItem.bind( this );
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ( event ) => {
    this.setState({
      formElementValue: event.target.value,
      formGroupAlertState: ''
    });
  }

  addItem = () => {
    let el = document.getElementById( 'todo-form-element' ),
        val = el.value,
        formGroupAlertState = null;

    if ( val.length === 0 ) {
      formGroupAlertState = 'error';
    } else {
      this.setState({
        todoList: [ ...this.state.todoList, val ]
      })
    }

    this.setState({ 
      formElementValue: '',
      formGroupAlertState: formGroupAlertState
    });
  }

  removeItem = ( event ) => {
    let array = this.state.todoList,
        el = event.target,
        content = el.innerHTML,
        index = array.indexOf( content );

    array.splice( index, 1 );

    this.setState({ todoList: array });
  }

  handleKeyPress = ( event ) => {
    if ( event.key === 'Enter' ) {
      this.addItem();
    }
  }

  render = () => {
    const formElementValue = this.state.formElementValue;

    return (
      <div className={ styles.App }>
        <FormGroup 
          id="todo" 
          hasButton={ true } 
          onChange={ this.handleChange }
          formElementValue={ formElementValue }
          formElementKeyPressMethod={ this.handleKeyPress }
          alertState={ this.state.formGroupAlertState }
          alertErrorContent="You can't add nothing to a todo list!"
          buttonClickMethod={ this.addItem }  
          buttonContent="Add" 
          labelContent="Todo Item" 
          placeholder="i.e., 'walk the dog'" type="text"/>

        <Card 
          listItemClickMethod={ this.removeItem } 
          listArray={ this.state.todoList }>
        </Card>
      </div>
    );
  }
}

export default App;
