import React, { Component } from 'react';

class TodoList extends Component{
    getStyle = () =>{
        return{
            backgroundColor: 'gray',
            padding: '10px',
            borderBottom: '1px dotted white',
            color:this.props.todo.complete? 'black': 'white',
            textDecoration:this.props.todo.complete ? 'line-through' : 'none',
        }
    }
    
    render(){
        let{name, id} = this.props.todo
        return(
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.completed.bind(this, id)}/>
                {name}
                <button style={styleButton} onClick={this.props.deleted.bind(this, id)}>x</button>
            </div>
        )
    }
}

const styleButton = {
    float:'right',
    cursor: 'pointer'
}


export default TodoList;