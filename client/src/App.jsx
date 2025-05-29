import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp/>
      <SignIn/>
    </>
  )
}

export default App
