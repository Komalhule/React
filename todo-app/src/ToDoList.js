import React from 'react';
function ToDoList({ toDos, completeToDo, removeToDo }) {
    return (
        <ul className="todo-list">
            {/* {toDos.map(({ text, isCompleted }, index) => (
                <li key={index} className={`todo ${isCompleted ? 'completed' : ''}`}>
                    <span className="task">{text}</span>
                    <button onClick={() => completeToDo(index)} className="complete-btn">
                        Complete
                    </button>
                    <button onClick={() => removeToDo(index)} className="remove-btn">
                        Remove
                    </button>
                </li>

            ))} */}

            
                {toDos.map(({ text, isCompleted }, index) => (
                <li key={index} className={`todo ${isCompleted ? 'completed' : ''} p-2 m-2  row`}>
                    <div className='col-md-8 border'>
                    <span className="task">{text}</span>
                    </div>
                    <div className='col-md-1 '>
                    <button onClick={() => completeToDo(index)} className="complete-btn btn btn-primary">
                        Complete
                    </button>
                    </div>
                    <div className='col-md-1'>
                        <button onClick={() => removeToDo(index)} className="remove-btn btn btn-danger">
                            Remove
                        </button>
                    </div>
                </li>

            ))}
            
        </ul>
    );

}
export default ToDoList;