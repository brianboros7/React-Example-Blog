import React, {useState} from 'react'
import ToDosData from './ToDosData'

function ToDoFumctional() {
    const [todos, setToDos] = useState(ToDosData)

    handleChange((id) => {
        // Update State so that the item with the given id flips 'completed' from false to true 
        // Remember not to modify prevState directly, 
        // BUT instead, return a new version of state with the changes
        setToDos((prevState) => {
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

    return(
        <section>
            <div className="todos-container p-1">
                <div className="todo-list bg-green-100 p-1"> 
                    <h2 className="todo-item p-2">{todoItems}</h2>
                </div>
            </div>
        </section>
    )
}

export default ToDoFunctional 