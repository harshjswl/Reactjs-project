import React from 'react'

function TodoList({ todos, setTodos }) {
    const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
    
    return (
        <div className='todo-list'>
            {todos.length === 0 ? (
                <p className='empty-text'>No task yet!</p>
            ) : (
                todos.map(todo => (
                    <div
                        key={todo.id}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span onClick={() => toggleComplete(todo.id)}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDelete(todo.id)}>❌</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default TodoList
