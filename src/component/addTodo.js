import React, { Component } from 'react';

class AddTodo extends Component{
    state = {
        name: ''
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.name)
        this.setState({
            name:''
        })
    }
    render(){
        return(
            <div style={{'height':'50px'}}>
                <form className="add_todo_form" onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;