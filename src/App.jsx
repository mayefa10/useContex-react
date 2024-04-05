import { useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeBtn/>
      <Card/>
       
    </>
  )
}

export default App
