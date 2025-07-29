import { useState } from 'react'
import Header from './Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User,{Newcomponent} from './User'
//user is default so no curly..

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello Dev</h1>
        <User />
        <h1>Counter Val: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase Counter Val</button>
      </div>
    </>
  )
}

export default App
