import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res)=>{
        const json = await res.json();
        setTodos(json.todos);
        console.log(todos);
      })
    },10000)
  },[])

  return (
    <div>
      {todos.map((todo)=>{
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

export default App
