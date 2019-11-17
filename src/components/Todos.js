import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    //prop access the todos state
    // map is used to loop around the todos
    // Todo refernces one on the list
    return this.props.todos.map((todo) => (
        <TodoItem /* list need id */key={todo.id} /* passing todo to todo item */ todo={todo} 
        markComplete = {this.props.markComplete} delTodo = { this.props.delTodo }/>
      ));
  }
}
//name of class
Todos.propTypes = {
  //prop from line 11
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;