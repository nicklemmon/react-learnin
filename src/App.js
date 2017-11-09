// Global
import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

// Components
import Card from './components/card/Card.js';
import FormGroup from './components/form-group/FormGroup.js';

let todoList = [];

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      todoList: []
    }

    this.updateList = this.updateList.bind( this );
  }

  updateList( event ) {
    const siblingInput = event.target.previousElementSibling;

    this.setState({ 
      todoList: [ ...this.state.todoList,siblingInput.value ]
    });

    console.log( this.state );

    siblingInput.value = '';
  }

  render() {
    return (
      <div className={ styles.App }>
        <FormGroup hasButton={ true } buttonClickMethod={ this.updateList }  buttonContent="Add" labelContent="Todo Item" id="todo-items" placeholder="i.e., 'walk the dog'" type="text"/>
        <Card listArray={ this.state.todoList }></Card>
      </div>
    );
  }
}

export default App;
