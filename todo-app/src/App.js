import React, { useState, useEffect } from 'react';
import AddToDoForm from './AddToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem('toDos')) || [];
    setToDos(toDos);
  }, []);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = text => {
    const newToDos = [...toDos, { text }];
    setToDos(newToDos);
  };

  const completeToDo = index => {
    const newToDos = [...toDos];
    newToDos[index].isCompleted = true;
    setToDos(newToDos);
  };

  const removeToDo = index => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} completeToDo={completeToDo} removeToDo={removeToDo} />
    </div>
  );
}
export default App;