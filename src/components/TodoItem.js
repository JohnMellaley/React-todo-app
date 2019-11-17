import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //could style as follows
    /*
        getStyle1= () => {
        
            if(this.props.dodo.complete){
                return {
                    textDecoration: 'line-through'
                };
                
            } else {
                return {
                    textDecoration: 'none'
                };
            }
        }
    */
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // short way of doing if statement
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        };
    }
    
    render() {
        const {id, title} =this.props.todo;
        return (
            // could have did this <div style={itemstyle} see below
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> 
                    {' '}
                    { /*this.props.todo.title*/ title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                    </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px, 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;