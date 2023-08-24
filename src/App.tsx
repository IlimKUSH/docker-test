import { useState } from 'react'
import {Link, Outlet} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)

  return (
    <div>
      <h1>value = {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <div>
        <Link to={'/about'}>About</Link>
        <Link to={'/welcome'}>Welcome</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default App
