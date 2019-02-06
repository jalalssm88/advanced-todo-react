import React, { Component } from 'react';
import './App.css';
import TodoApp from './component/todoApp'
import Header from './component/header'
import AddTodo from './component/addTodo'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos:[
        {
          id:1,
          name: 'i got up early in the morning',
          complete: false,
        },
        {
          id:2,
          name: 'i got ready for my office',
          complete: false,
        },
        {
          id:3,
          name: 'i walk into my office',
          complete: false,
        },
      ]
    }
  }

  completed = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.complete = !todo.complete
        }
        return todo
      })
    })
  }

  deleted = (id) =>{
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id!==id)]
    })
  }

  addTodo = (name) =>{
    console.log('heeeeeeeeeeeee', name)
    const newTodo = {
      id:4,
      name:name,
      complete:false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
     <div className="main_container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
       <TodoApp todo={this.state.todos} completed={this.completed} deleted={this.deleted}/>
     </div>
    );
  }
}

export default App;
