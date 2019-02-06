import React, { Component } from 'react';
import TodoList from './todoList'

class TodoApp extends Component{
   
    render(){
        return(
            this.props.todo.map(item =>{
                return <TodoList key={item.id} todo={item} completed={this.props.completed} deleted={this.props.deleted}/>
            })
        )
      
    }
}

export default TodoApp;