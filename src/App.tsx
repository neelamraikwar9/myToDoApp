// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import { todoData } from './data/todoData'
import { useState } from 'react'; 

function App() {
  const [todo, setTodo] = useState(todoData); 

  const handleToggleChange = (id: string|number) => {
    setTodo(todo.map((to) => (to.id === id) ?  {...to, completed: !to.completed} : to)); 
  }

  return (
    <>
      <div>
        <Header title={"To Do App"}/>
        {todo.map((todo, index) => (
          <TodoItem key={index} todo={todo} onToggle={handleToggleChange}/>
        ))
        
        }
      </div>
    </>
  )
}

export default App
