import React from 'react';

function ToDoItem(props) {

    return(
        <div>
            <div className="todo-item">
                <input type="checkbox" checked={props.item.completed} /> 
                <p>{props.item.text} </p>
            </div>
        </div> 
    )
}

export default ToDoItem; 