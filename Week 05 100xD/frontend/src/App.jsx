import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  
  fetch("http://localhost:3000/todos")
  .then(async function(response){
    const json = await response.json();
    console.log(json);
    setTodos(json.msg);
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
