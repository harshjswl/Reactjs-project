import { useState } from "react"
import CreateTodo from "./components/CreateTodo"
import TodoList from "./components/TodoList";
function App() {

  const[showTask,setTask]=useState(false);
  const[taskList,setTaskList]=useState([]);
  const addTask=()=>{
    setTask(prev=>!prev);
  }
  return (
    <>
    <section className="todo-section">
      <div className="heading-dev">
        <h1 className="todo-heading">
          Todo App
        </h1>
      </div>

      <button className="addTaskbutton" onClick={addTask}>+</button>
      {
        showTask && (
          <CreateTodo todos={taskList} setTodos={setTaskList}/>
        )
      }



      <TodoList todos={taskList} setTodos={setTaskList}/>
    </section>
    </>
  )
}

export default App
