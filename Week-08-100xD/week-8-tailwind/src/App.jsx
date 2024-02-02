import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='bg-red-300 md:bg-blue-300'>Hey!</div>
    </div>
  )
}

export default App;