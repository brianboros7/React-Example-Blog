import React from 'react';
import ToDoItem from './ToDoItem';
import ToDosData from './ToDosData'; 

class ToDoApp extends React.Component {
    constructor() {
        super()
        this.state = { 
            todos: ToDosData 
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        // Update State so that the item with the given id flips 'completed' from false to true 
        // Remember not to modify prevState directly, 
        // but instead to return a new version of state with the changes you want updated
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {  
                        ...todo,
                        completed: !todo.completed 
                    }
                }
                return todo 
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} 
        handleChange={this.handleChange} />) 
        return (
            <div className="todo-list bg-green-100"> 
                <h2>{todoItems} </h2>
            </div>
        );
    }
}

export default ToDoApp; 