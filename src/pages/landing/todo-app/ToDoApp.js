import React from 'react';
import ToDoItem from '../landing/todo-app/ToDoItem';
import ToDosData from '../landing/todo-app/ToDosData'; 

class ToDoApp extends React.Component {
    constructor() {
        super()
        this.state = { 
            todos: ToDosData 
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />) 

        return (
            <div className="todo-list"> 
                <h2>{todoItems} </h2>
            </div>
        )
    }
}

export default ToDoApp; 