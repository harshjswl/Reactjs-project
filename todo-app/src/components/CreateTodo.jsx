import React, { useState } from 'react';

function CreateTodo({ todos, setTodos }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask('');
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default CreateTodo;
